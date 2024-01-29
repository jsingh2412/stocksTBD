import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

#test 2013 csv file
df = pd.read_csv('all_stock_data_final-2013.csv')

df['date'] = pd.to_datetime(df['date'])
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

#determines how long of time to be considered for prediction
sequence_length = 10

x, y = makeSequences(scaled_data, sequence_length)

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)

model = Sequential()
model.add(LSTM(50, activation='relu', input_shape=(sequence_length, 5)))
model.add(Dense(1))
model.compile(optimizer='adam', loss='mean_squared_error')

model.fit(x_train, y_train, epochs=50, batch_size=32, validation_split=0.1)

loss = model.evaluate(x_test, y_test)
print(f'Test Loss: {loss}')
