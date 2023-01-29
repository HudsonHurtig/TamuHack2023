import math
import csv

import requests
import pandas as pd
from alpha_vantage.timeseries import TimeSeries
import numpy as np

import time

rows=[]
with open('D:\TamuHack2023\Book1.csv') as file:
    csvreader = csv.reader(file)
    header = next(csvreader)
    for row in csvreader:
        rows.append(row)
    
currentPriceList = []
faceValList = []
yearsToMatureList = []
couponRateList = []
freqList = []

tickerList = []

for i in range(5):
    currentPriceList.append(float(rows[i][header.index('current price')]))
    faceValList.append(float(rows[i][header.index('Face value')]))
    yearsToMatureList.append(float(rows[i][header.index('years to maturity')]))
    couponRateList.append(float(rows[i][header.index('annual coupon rate')]))
    freqList.append(float(rows[i][header.index('frequency of coupon payment per year')]))
    tickerList.append(rows[i][header.index('Ticker')])
    
print(tickerList)

def sharpe_sortino_beta(ticker='TSLA', market_returns='SPY'):
    try:
        
        ts = TimeSeries(key='SWKZ23Y8HKIF4N4A', output_format='pandas')
        data, meta_data = ts.get_daily_adjusted(ticker)  
    
    except:
        
        return 0,0,0

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
    # print("Sharpe Ratio:", sharpe_ratio)   ### return of asset - market return / stdev
    # print("Sortino Ratio:", sortino_ratio) ### return of asset - market return / stdev of down side
    # print("beta_value:",beta_value) ### measure of volatility
    
    return {"ticker": ticker,"Sharpe" : sharpe_ratio, "Sortino" : sortino_ratio,"Beta" : beta_value}

country = 'United States'
api_url = 'https://api.api-ninjas.com/v1/inflation?country={}'.format(country)
response = requests.get(api_url, headers={'X-Api-Key': 'c7AocO5JS7P7LDykTMtnVA==tdnVQnHKRI0ChLS3'})
if response.status_code == requests.codes.ok:
    
    l = eval(response.text)[0]
    
    r = float(l['yearly_rate_pct'])
    
    # print(r)
    
else:
    print("Error:", response.status_code, response.text)
pit1 = []
pit2 = []

for i in tickerList:
    l = sharpe_sortino_beta(i)
    pit1.append(l["Sharpe"])
    pit2.append(l["Beta"])
    print(l)
    time.sleep(30)
    
newSharpe = [i/sum(pit1) for i in pit1]
newBeta = [i/sum(pit2) for i in pit2]
    
def yearsToMaturity(currentPriceListVal, faceValListVal, yearsToMatureListVal, couponRateListVal, freqListVal):
    currPrice = currentPriceListVal
    faceVal = faceValListVal
    years = yearsToMatureListVal
    coupRate = couponRateListVal
    freq = freqListVal

    def ytm(currPrice, faceVal, years, coupRate, freq, x):
        c = currPrice
        f = faceVal
        n = years
        r = coupRate
        m = freq
        
        if r == 0:
            return (f / c) ** (1 / n) - 1
        else:
            return c - (f / ((1 + x / m) ** (n * m)) + (f * r / m) / ((1 + x / m)) * (1 - (1 + x / m) ** (-n * m)) / (1 - (1 + x / m) ** (-1)))

    def bisection(a, b, tol):
        x = a

        while ((b - a) >= tol):
            x = (a + b)/2

            if ytm(currPrice, faceVal, years, coupRate, freq, x) == 0.0:
                break
            elif ytm(currPrice, faceVal, years, coupRate, freq, x) * ytm(currPrice, faceVal, years, coupRate, freq, a) < 0:
                b = x
            else:
                a = x

        return x

    if coupRate != 0:
        a = 0.0000001
        b = 1
        tol = 0.0000001
        root = bisection(a, b, tol)   
    else:
        root = (faceVal / currPrice) ** (1 / years) - 1

    rootPercent = root 

    return rootPercent


mat = []
bondDict = {'Bond 1' : '', 'Bond 2' : '', 'Bond 3' : '', 'Bond 4' : '', 'Bond 5' : ''}
for i in range(len(currentPriceList)):
    q = yearsToMaturity(currentPriceList[i], faceValList[i], yearsToMatureList[i], couponRateList[i], freqList[i])
    mat.append(q)
    bondDict[f'Bond {i+1}']=q
    # print(q)

pp = [i/sum(mat) for i in mat]
# print(mat)
 # print(pp)

print('\n')
print("To be risk averse the new proportion of stocks in portfolio equals", newSharpe, 'respectively')
print('\n')
print("To be risky the new proportion of stocks in portfolio equals", newBeta, 'respectively')

print('------------------------------------------------------')

print(bondDict)
print('Given the current stability of the US Government, there is neglibile risk in Treasury Bonds, meaning they should be optimized at a proportion of', pp, 'respectively')