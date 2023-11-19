import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

#load training file .csv here
data = pd.read_csv('kaggle-training/all-data.csv', header=None,encoding='latin-1')
prices = data['Close'].values.reshape(-1, 1)

#normalize the data from file
scaler = MinMaxScaler(feature_range=(0, 1))
prices_scaled = scaler.fit_transform(prices)

#create sequences for training the LSTM model
def create_sequences(data, seq_length):
    sequences = []
    for i in range(len(data) - seq_length):
        sequence = data[i:i+seq_length]
        target = data[i+seq_length]
        sequences.append((sequence, target))
    return np.array(sequences)

#define hyperparameters (EDIT THESE LATER MAYBE)
sequence_length = 10
train_size = int(len(prices_scaled) * 0.80)
train_data = prices_scaled[:train_size]

#create sequences for training with data and sequence length
train_sequences = create_sequences(train_data, sequence_length)

#splits the sequences into input features (labeled as X) and target values (labeled as y)
X_train = np.array([seq[0] for seq in train_sequences])
y_train = np.array([seq[1] for seq in train_sequences])

#build the LSTM model
model = Sequential()
model.add(LSTM(units=50, return_sequences=True, input_shape=(sequence_length, 1)))
model.add(LSTM(units=50))
model.add(Dense(units=1))
model.compile(optimizer='adam', loss='mean_squared_error')

#train the model
model.fit(X_train, y_train, epochs=10, batch_size=32)

#make predictions on the test set (EDIT THESE AND CHANGE LATER)
test_data = prices_scaled[train_size - sequence_length:]
test_sequences = create_sequences(test_data, sequence_length)
X_test = np.array([seq[0] for seq in test_sequences])
predictions = model.predict(X_test)

#inverse transform the predictions to original scale given
predictions = scaler.inverse_transform(predictions)

#take results and plot them
plt.figure(figsize=(14, 7))
plt.plot(data['Date'][train_size + sequence_length:], data['Close'][train_size + sequence_length:], label='Actual Prices')
plt.plot(data['Date'][train_size + sequence_length:], predictions, label='Predicted Prices')
plt.title('Stock Price Prediction using LSTM')
plt.xlabel('Date')
plt.ylabel('Stock Price')
plt.legend()
plt.show()