import yfinance as yf
import pandas as pd
from scipy.stats import linregress

# Define the stock ticker
ticker = 'AAPL'

# Retrieve weekly historical stock data from yfinance
stock_data = yf.download(ticker, period='max', interval='1wk')

# Calculate stock returns
stock_returns = stock_data['Close'].pct_change().dropna()

#Retrieve S&P500 data
market_data = yf.download('SPY', period='max', interval='1wk')

# Calculate market returns
market_returns = market_data['Close'].pct_change().dropna()

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