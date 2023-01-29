import pandas as pd
from alpha_vantage.timeseries import TimeSeries
import numpy as np

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
        
    
    
    
ticker = 'AAPL'
market_returns = 'SPY'

