import finnhub
import pandas as pd
# Setup client
finnhub_client = finnhub.Client(api_key="cfapvgqad3i65pt1jragcfapvgqad3i65pt1jrb0")

# Stock candles
res = finnhub_client.stock_candles('VERU', 'D', 1590988249, 1591852249)
print(res)


print(pd.DataFrame(res))
print(print(finnhub_client.price_target('VERU')))

# Aggregate Indicators
