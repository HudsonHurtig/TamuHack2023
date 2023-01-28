import pandas as pd
from alpha_vantage.timeseries import TimeSeries
from scipy.stats import linregress

# Define the stock ticker
ticker = 'MSFT'

# Define the API key
api_key = 'SWKZ23Y8HKIF4N4A'

# Retrieve weekly historical stock data from Alpha Vantage
ts = TimeSeries(key=api_key, output_format='pandas')
stock_data, meta_data = ts.get_weekly(symbol=ticker)

# Calculate stock returns
stock_returns = stock_data['4. close'].pct_change().dropna()

#Retrieve S&P500 data
ts = TimeSeries(key=api_key, output_format='pandas')
market_data, meta_data = ts.get_weekly(symbol='SPY')

# Calculate market returns
market_returns = market_data['4. close'].pct_change().dropna()

# merge the stock and market returns
data = pd.concat([stock_returns, market_returns], axis=1)
data.columns = [ticker, 'market']

# calculate beta values over time
beta_list = []
for i in range(len(stock_returns) - 1):
    subset = data.iloc[i:i+2]
    slope, _, rvalue, _, _ = linregress(subset['market'], subset[ticker])
    beta = slope
    beta_list.append(beta)

print(beta_list)
print(len(beta_list))
print(sum(beta_list)/len(beta_list))