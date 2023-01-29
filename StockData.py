import requests
import pandas as pd
from alpha_vantage.timeseries import TimeSeries
import numpy as np


def sharpe_sortino_beta(ticker='TSLA', market_returns='SPY'):
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
        print("Sharpe Ratio:", sharpe_ratio)   ### return of asset - market return / stdev
        print("Sortino Ratio:", sortino_ratio) ### return of asset - market return / stdev of down side
        print("beta_value:",beta_value) ### measure of volatility
        
        return {"Sharpe" : sharpe_ratio, "Sortino" : sortino_ratio,"Beta" : beta_value}
    
    except:
        
        return 0,0,0



country = 'United States'
api_url = 'https://api.api-ninjas.com/v1/inflation?country={}'.format(country)
response = requests.get(api_url, headers={'X-Api-Key': 'c7AocO5JS7P7LDykTMtnVA==tdnVQnHKRI0ChLS3'})
if response.status_code == requests.codes.ok:
    
    l = eval(response.text)[0]
    
    r = float(l['yearly_rate_pct'])
    
    print(r)
    
else:
    print("Error:", response.status_code, response.text)



print(sharpe_sortino_beta("VERU"))