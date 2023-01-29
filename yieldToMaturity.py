from pprint import pprint
import requests
import os
import urllib.parse
import math as math

appid = 'WUP7T2-WQKTTWWXU4'

while True:
    try:
        currPrice = input("Enter the current price: ")
        faceVal = input("Enter the face/par value: ")
        years = input("Enter the years to maturity: ")
        coupRate = input("Enter the coupon rate as a decimal (e.g. 5% = 0.05): ")
        freq = input("Enter the frequency (per year) of coupon payment (e.g. semianually is 2): ")

        equation = currPrice + "=" + faceVal + "/(1+x/" + freq + ")^(" + years + "*" + freq + ")+sum_(i=1)^(" + years + "*" + freq + ")(" + faceVal + "*" + coupRate + "/" + freq + ")/(1+x/" + freq + ")^i"

        query = urllib.parse.quote_plus(f"{equation}")
        query_url = f"http://api.wolframalpha.com/v2/query?" \
                    f"appid={appid}" \
                    f"&input={query}" \
                    f"&includepodid=RealSolution" \
                    f"&output=json"

        r = requests.get(query_url).json()

        data = r["queryresult"]["pods"][0]["subpods"][1]

        """
        for key in r["queryresult"]:
            if key == 'pods':
                for key2 in r["queryresult"][key][0]:
                    if key2 == 'subpods':
                        dict = r["queryresult"][key][0][key2][1]
                        for key3 in dict:
                            if key3 == 'plaintext':
                                print(dict[key3])
        """

        result = str(float(data['plaintext'].split('≈')[1])*100) + '%'

        print("The yeild to maturity is " + result)

        break

    except:
        print("Invalid Data, Try Again")