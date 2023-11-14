import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import tensorflow as tf
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import SimpleRNN, Dense

#Need to load stock data into DataFrame and make sure that it has a "date" column and "close" column 
data = pd.read_csv('your_stock_data.csv')

#To extract the data from the close column
prices = data['Close'].values

#Used to normalize the data using MinMax
scaler = MinMaxScaler()
prices = scaler.fit_transform(prices.reshape(-1, 1))

#Used to prepare the data for training
X = []  #this is the input sequence
y = []  #this is the target sequence

#Change this to define the look-back window size (number of previous days to consider)
look_back = 30

for i in range(look_back, len(prices)):
    X.append(prices[i - look_back:i, 0])
    y.append(prices[i, 0])

X, y = np.array(X), np.array(y)

#Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

#Creates the RNN model
model = Sequential()
model.add(SimpleRNN(units=50, activation='tanh', input_shape=(X_train.shape[1], 1)))
model.add(Dense(1))
model.compile(optimizer='adam', loss='mean_squared_error')

#Train the model
model.fit(X_train, y_train, epochs=50, batch_size=64)

#Goes over the model and evaluates it
loss = model.evaluate(X_test, y_test)
print(f"Test Loss: {loss}")

#Make predictions based on model
y_pred = model.predict(X_test)

#Inverse transform the predictions to get actual stock prices
y_pred = scaler.inverse_transform(y_pred)

#Taking data and plotting the results
plt.figure(figsize=(12, 6))
plt.plot(y_test, label='Actual Prices')
plt.plot(y_pred, label='Predicted Prices')
plt.xlabel('Time')
plt.ylabel('Stock Price')
plt.legend()
plt.show()
