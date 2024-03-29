import tensorflow as tf
import sys
from datetime import datetime, timedelta
import pandas as pd
import pandas_datareader as web
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from joblib import load

#function to pull data
def get_data(symbol, start, end):
    try:
        df = web.DataReader(symbol, 'stooq', start, end) #get data for a company in the given dates
    except:
        print(f"Error getting data for {symbol}")
    return df

model_save_path = './exported_model' #path for saved model

# Load the model from the saved model path
model = tf.saved_model.load(model_save_path)
serving_default = model.signatures['serving_default']
#get input tensor name
input_specs = serving_default.structured_input_signature[1]  #get input signature
input_name = list(input_specs.keys())[0]

ticker = sys.argv[1] #ticker for company making prediction for, supplied as a command line arg


current_datetime = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0) #current date
start_date = current_datetime - timedelta(days=60) #date 60 days prior

pulled_data = get_data(ticker,start_date,current_datetime) #get data from start date
print(pulled_data)

#reverse dataframe
try:
    pulled_data = pulled_data.iloc[::-1]
except:
    pass



#process data
try:
    #create variable for daily returns
    pulled_data['daily_returns'] = pulled_data['Close'].pct_change()
        
    #create variables for moving average
    pulled_data['2_day_ma'] = pulled_data['Close'].rolling(window=2).mean()
    pulled_data['3_day_ma'] = pulled_data['Close'].rolling(window=3).mean()
    pulled_data['5_day_ma'] = pulled_data['Close'].rolling(window=5).mean()
    pulled_data['7_day_ma'] = pulled_data['Close'].rolling(window=7).mean()
    pulled_data['10_day_ma'] = pulled_data['Close'].rolling(window=10).mean()
    pulled_data['20_day_ma'] = pulled_data['Close'].rolling(window=20).mean()
    pulled_data['30_day_ma'] = pulled_data['Close'].rolling(window=30).mean()
    #create columns for 2, 3-day, 5-day, 7, 10-day, 14, 20-day, 30 volatility
    pulled_data['2_day_volatility'] = pulled_data['daily_returns'].rolling(window=2).std()
    pulled_data['3_day_volatility'] = pulled_data['daily_returns'].rolling(window=3).std()
    pulled_data['5_day_volatility'] = pulled_data['daily_returns'].rolling(window=5).std()
    pulled_data['7_day_volatility'] = pulled_data['daily_returns'].rolling(window=7).std()
    pulled_data['10_day_volatility'] = pulled_data['daily_returns'].rolling(window=10).std()
    pulled_data['20_day_volatility'] = pulled_data['daily_returns'].rolling(window=20).std()
    pulled_data['30_day_volatility'] = pulled_data['daily_returns'].rolling(window=30).std()
        
    for i in [2,3,5,7,10,20,30]:
        high_roll = pulled_data['High'].rolling(window=i).max()
        low_roll = pulled_data['Low'].rolling(window=i).min()
        close = pulled_data['Close']
            
            # Calculate Stochastic Oscillator
            # %K = (Current Close - Lowest Low)/(Highest High - Lowest Low) * 100
        pulled_data[f'{i}_day_stoch_k'] = 100 * (close - low_roll) / (high_roll - low_roll)
            
            #calculate support and resistance
        pulled_data[f'{i}_day_support'] = pulled_data['Close'].rolling(window=i).min()
        pulled_data[f'{i}_day_resistance'] = pulled_data['Close'].rolling(window=i).max()
            #calculate average volume
        pulled_data[f'{i}_day_avg_volume'] = pulled_data['Volume'].rolling(window=i).mean()
            
            #calculate boiler bands
            # Calculate the standard deviation for the current window size
        std_dev = pulled_data['Close'].rolling(window=i).std()
            # Calculate the upper and lower Bollinger Bands
        pulled_data[f'{i}_day_upper_band'] = pulled_data[f'{i}_day_sma'] + (std_dev * 2)
        pulled_data[f'{i}_day_lower_band'] = pulled_data[f'{i}_day_sma'] - (std_dev * 2)
            
            
    close = pulled_data['Close']

        # Calculate daily price changes
    delta = close.diff()
        # Separate gains and losses
    gain = delta.where(delta > 0, 0)
    loss = -delta.where(delta < 0, 0)
        # Calculate the average gain and loss using an exponential moving average (EMA)
    average_gain = gain.ewm(com=13, min_periods=14).mean()
    average_loss = loss.ewm(com=13, min_periods=14).mean()
        # Compute the Relative Strength (RS)
    rs = average_gain / average_loss
        # Calculate the RSI
    rsi = 100 - (100 / (1 + rs))
        # Add the RSI to DataFrame
    pulled_data['RSI'] = rsi

        # Calculate the Short term Exponential Moving Average
    ema12 = pulled_data['Close'].ewm(span=12, adjust=False).mean()
        # Calculate the Long term Exponential Moving Average
    ema26 = pulled_data['Close'].ewm(span=26, adjust=False).mean()
        
        # Calculate the MACD line
    pulled_data['MACD'] = ema12 - ema26
        # Calculate the signal line
    pulled_data['Signal_Line'] = pulled_data['MACD'].ewm(span=9, adjust=False).mean()


        # Calculate PPO
    ppo = ((ema12 - ema26) / ema26) * 100
    pulled_data['PPO'] = ppo
        
    #print(pulled_data.shape)
except:
    pass

pulled_data = pulled_data.dropna() #drop rows with NaN values in some columns

#correct incorrect feature ordering
correct_order = ['Open', 'High', 'Low', 'Close', 'Volume','daily_returns','2_day_ma', '3_day_ma', '5_day_ma', '7_day_ma',
                         '10_day_ma', '20_day_ma', '30_day_ma','2_day_volatility', '3_day_volatility', '5_day_volatility',
                         '7_day_volatility', '10_day_volatility', '20_day_volatility', '30_day_volatility',
                         '2_day_support', '2_day_resistance', '2_day_avg_volume', '2_day_stoch_k'
]

#reorder columns
pulled_data = pulled_data[correct_order]

last_7_rows = pulled_data.iloc[-7:].copy() #get last 7 rows



scaler = load('fitted_scaler.joblib') #load in scaler

scaled_data = scaler.transform(last_7_rows) #scale data
scaled_data_reshaped = scaled_data.reshape(1, 7, 24) #reshape to input shape
# Prepare the data as a dictionary with the correct input name
input_data = {input_name: tf.constant(scaled_data_reshaped, dtype=tf.float32)}

#make prediction
prediction = serving_default(**input_data)

#access prediction using output key 'dense_7'
predicted_output = prediction['dense_7'].numpy()

print(predicted_output) #print output




