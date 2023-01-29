from dash import Dash, html, dcc
import plotly.express as px
import plotly.graph_objects as go
import pandas as pd
import dash_bootstrap_components as dbc

app = Dash(__name__, external_stylesheets=[dbc.themes.CYBORG])




labels = ['Stocks','Bonds','Savings']
values = [50, 25, 25]

fig = go.Figure(data=[go.Pie(labels=labels, values=values)])



app.layout = html.Div(children=[
    html.H1('GS + TAMUHACK2023 portfolio Risk optimizer', style={'textAlign': 'center', 'color': '#7FDBFF'}),

    html.Div(children='''
        Welcome to risk mitigated finance. Simplified. 
    '''),
    
    html.Div(children='''
        There are many types of risk and exposure. Intuition would have it the safest and most conservative thing to do with the money you have saved up is nothing!
    '''),
    
    html.Div(children='''
        However, there are many factors that would potentially make this not the case.
     ''')#,

    # dcc.Graph(
    #     id='portfolio composition',
    #     figure=fig
    # )
])

if __name__ == '__main__':
    app.run_server(debug=True, host='0.0.0.0',port=80)
