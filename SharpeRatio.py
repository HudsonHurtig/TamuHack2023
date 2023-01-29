import pandas as pd
from alpha_vantage.timeseries import TimeSeries
from math import sqrt

# Define the stock ticker and API key
ticker = 'VERU'
api_key = 'SWKZ23Y8HKIF4N4A'

# Retrieve historical stock data from alpha vantage
ts = TimeSeries(key=api_key, output_format='pandas')
stock_data, meta_data = ts.get_daily_adjusted(ticker)

# Calculate daily returns
stock_returns = stock_data['4. close'].pct_change().dropna()

# Define the risk-free rate and the time horizon
risk_free_rate = 0.03
time_horizon = 252

# Calculate the mean return
mean_return = stock_returns.mean()

# Calculate the standard deviation of returns
std_return = stock_returns.std()

# Calculate the sharpe ratio
sharpe_ratio = (mean_return - risk_free_rate) * sqrt(time_horizon) / std_return
print("The Sharpe ratio for the stock is: ", sharpe_ratio)

# Define the target return
target_return = 0

# Calculate the downside deviation 
downside_returns = stock_returns[stock_returns < target_return]
downside_std_return = downside_returns.std()

# Calculate the sortino ratio
sortino_ratio = (mean_return - target_return) * sqrt(time_horizon) / downside_std_return

print("The Sortino ratio for the stock is: ", sortino_ratio)