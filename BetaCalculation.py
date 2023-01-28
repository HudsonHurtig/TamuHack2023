import pandas_datareader as pdr
from sklearn import linear_model

# Define the stock ticker and the benchmark index
ticker = 'AAPL'
benchmark = 'SPY'

# Retrieve historical stock data from Yahoo Finance
stock_data = pdr.get_data_yahoo(ticker)
benchmark_data = pdr.get_data_yahoo(benchmark)

# Calculate daily returns for the stock and benchmark index
stock_returns = stock_data.loc[:, 'Adj Close'].pct_change()
benchmark_returns = benchmark_data['Adj Close'].pct_change()

# Run a linear regression to calculate the beta value
regression = linear_model.LinearRegression()
regression.fit(benchmark_returns.values.reshape(-1, 1), stock_returns.values)
beta = regression.coef_[0]
print('Beta value for', ticker, 'is', beta)