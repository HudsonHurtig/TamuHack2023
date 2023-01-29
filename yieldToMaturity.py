import math

currPrice = float(input("Please input the current price: "))
faceVal = float(input("Please input the face/par value: "))
years = float(input("Please enter the years to maturity: "))
coupRate = float(input("Please enter the annual coupon rate as a decimal (e.g. 5% = 0.05): "))
freq = float(input("Please enter the frequency (per year) of coupon payment (e.g. semiannually is 2): "))

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

rootPercent = f'{root * 100:0.4f}%'

print("Approximate solution is: " + rootPercent)