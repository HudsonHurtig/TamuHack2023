import requests

country = 'United States'
api_url = 'https://api.api-ninjas.com/v1/inflation?country={}'.format(country)
response = requests.get(api_url, headers={'X-Api-Key': 'c7AocO5JS7P7LDykTMtnVA==tdnVQnHKRI0ChLS3'})
if response.status_code == requests.codes.ok:
    
    l = eval(response.text)[0]
    
    print(float(l['yearly_rate_pct']))
    print(float(l['monthly_rate_pct']))
    
else:
    print("Error:", response.status_code, response.text)