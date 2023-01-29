import pandas as pd
import numpy as np
from alpha_vantage.timeseries import TimeSeries
from alpha_vantage.techindicators import TechIndicators
from dash import Dash
import dash_table
import plotly.graph_objs as go

# Define your Alpha Vantage API key
api_key = 'YOUR_API_KEY'

# Define the stocks you want to analyze
stocks = ['AAPL', 'GOOG', 'AMZN', 'FB', 'TSLA']

# Create an instance of the TimeSeries class
ts = TimeSeries(key=api_key, output_format='pandas')

# Create an instance of the TechIndicators class
ti = TechIndicators(key=api_key, output_format='pandas')

# Retrieve the historical data for the stocks
data = {}
for stock in stocks:
    data[stock], _ = ts.get_daily_adjusted(symbol=stock)
data = pd.concat(data, axis=1)

# Calculate the daily returns for the stocks
returns = data.pct_change()

# Calculate the Sharpe ratio for each stock
sharpe_ratio = returns.mean() / returns.std()

# Calculate the Sortino ratio for each stock
sortino_ratio = returns.mean() / returns[returns<0].std()

# Calculate the beta for each stock
betas = {}
for stock in stocks:
    beta, _ = ti.get_beta(symbol=stock)
    betas[stock] = beta.iloc[0]['Beta']

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
