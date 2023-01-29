from dash import Dash, dcc, html, Input, Output
import plotly.express as px
import plotly.graph_objects as go
import pandas as pd
import pandas as pd
from alpha_vantage.timeseries import TimeSeries
import numpy as np
import dash_bootstrap_components as dbc

import SharpeBetaSortino as calculater
from dash_bootstrap_templates import load_figure_template

app = Dash(__name__, external_stylesheets=[dbc.themes.SLATE])

def sharpe_sortino_beta(ticker='AAPL', market_returns='SPY'):
    try:
        
        ts = TimeSeries(key='SWKZ23Y8HKIF4N4A', output_format='pandas')
        data, meta_data = ts.get_daily_adjusted(ticker)
        returns = data['4. close'].pct_change()
        mar = 0.03  # minimum acceptable return
        downside_returns = returns[returns < mar]
        mean_return = returns.mean()
        std_return = returns.std()
        downside_std = downside_returns.std()
        sharpe_ratio = (mean_return - mar) / std_return
        sortino_ratio = (mean_return - mar) / downside_std
        data_market, meta_data = ts.get_daily_adjusted(market_returns)
        market_returns = data_market['4. close'].pct_change()
        beta_value = returns.cov(market_returns) / market_returns.var()
        print("Sharpe Ratio:", sharpe_ratio)
        print("Sortino Ratio:", sortino_ratio)
        print("beta_value:",beta_value)
        
        return sharpe_ratio, sortino_ratio, beta_value
    
    except:
        
        return 0,0,0



labels = ['Stocks','Bonds','Savings']
values = [50, 25, 25]

fig = go.Figure(data=[go.Pie(labels=labels, values=values)])

load_figure_template('SLATE')

app.layout = html.Div(children=[
    html.H1('GS + TAMUHACK2023 portfolio Risk optimizer\n', style={'textAlign': 'center'}),

    html.H2(children='''
        Welcome to risk mitigated finance. Simplified.\n 
    ''', style={'textAlign': 'center', 'margin-top':'7px'}),
    
    html.H3(children='''
        There are many types of risk and exposure. Intuition would have it the safest and most conservative thing to do with the money you have saved up is nothing!\n
    ''', style={'textAlign': 'center', 'margin-top':'7px'}),
    
    html.H3(children='''
        However, there are many factors that would potentially make this not the case.\n
     ''', style={'textAlign': 'center', 'margin-top':'7px'}),
    
    html.H3(children=f"However, there are many factors that would potentia{sharpe_sortino_beta()}lly make this not the case.\n", style={'textAlign': 'center', 'margin-top':'7px'}),


    # dcc.Graph(
    #     id='portfolio composition',
    #     figure=fig
    # ),
    html.H6("Change the value in the text box to see callbacks in action!"),
    html.Div([
        "Input: ",
        dcc.Input(id='my-input', value='initial value', type='text')
    ]),
    html.Br(),
    html.Div(id='my-output')
])

@app.callback(
    Output(component_id='my-output', component_property='children'),
    Input(component_id='my-input', component_property='value')
)

def update_output_div(input_value):
    return f'Output: {input_value}'



if __name__ == '__main__':
    app.run_server(debug=True, host='0.0.0.0',port=80)
