import pandas as pd
import numpy as np
import yfinance as yf
from dash import Dash
import dash_table
import plotly.graph_objs as go

# Define the stocks you want to analyze
stocks = ['AAPL', 'GOOG', 'AMZN', 'FB', 'TSLA']

# Retrieve the historical data for the stocks
data = yf.download(stocks, start='2020-01-01', end='2021-12-31')['Adj Close']

# Calculate the daily returns for the stocks
returns = data.pct_change()

# Calculate the Sharpe ratio for each stock
sharpe_ratio = returns.mean() / returns.std()

# Calculate the Sortino ratio for each stock
sortino_ratio = returns.mean() / returns[returns<0].std()

# Calculate the beta for each stock
betas = {}
for stock in stocks:
    beta = yf.Ticker(stock).info['beta']
    betas[stock] = beta

# Create a DataFrame to hold the results
results = pd.DataFrame({'Sharpe Ratio': sharpe_ratio, 'Sortino Ratio': sortino_ratio, 'Beta': betas})

# Create a Dash app to display the results in a table
app = Dash()
app.layout = dash_table.DataTable(
    id='table',
    columns=[{"name": i, "id": i} for i in results.columns],
    data=results.to_dict("rows"),
)

if __name__ == '__main__':
    app.run_server(debug=True)





