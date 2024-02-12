import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

#testing file with only 2013 AAPL data
df = pd.read_csv('all_stock_data_final-2013.csv')

#converting 'date' column to the datetime format to plot
df['date'] = pd.to_datetime(df['date'])

#initializing dates and closing prices
dates = df['date'].values
closing_prices = df['close'].values

#plotting close price over time before model is run
plt.figure(figsize=(12, 6))
plt.plot(dates, closing_prices, label='Close Price')
plt.xlabel('Date')
plt.ylabel('Close Price')
plt.title('Close Price Over Time')
plt.legend()

#show plot
plt.show()

#preprocessing data for LSTM model taking in each column based off format name in csv
data = df[['open', 'high', 'low', 'close', 'volume']].values
scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(data)

def makeSequences(data, seq_length):
    x, y = [], []
    for i in range(len(data) - seq_length):
        seq = data[i:i + seq_length]
        label = data[i + seq_length, 3] 
        x.append(seq)
        y.append(label)
    return np.array(x), np.array(y)

#determines the length of time to be considered for prediction
#TRY CHANGING THIS AROUND TO SEE HOW IT AFFECTS PERFORMANCE
sequence_length = 10

x, y = makeSequences(scaled_data, sequence_length)

#split the data into training and testing sets
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)

#build LSTM model
model = Sequential()
model.add(LSTM(50, activation='relu', input_shape=(sequence_length, 5))) #50 epochs?
model.add(Dense(1))
model.compile(optimizer='adam', loss='mean_squared_error')

#train the model with split data
model.fit(x_train, y_train, epochs=50, batch_size=32, validation_split=0.1) 

#evaluate the model on test data
loss = model.evaluate(x_test, y_test)
print(f'Test Loss: {loss}')

#ADD GRAPH FOR PREDICTED CLOSE VALUES HERE <<<<<<<<<<<<<<<<<<<<<<<<<
