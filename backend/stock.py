import yfinance
import json

def stock_data(ticker,duration):
    stock = yfinance.Ticker(ticker)
    closing = []
    dates = []

    stock_info = stock.history(period=duration)

    print(stock_info)

    for i in stock_info.index:
        dates.append(i.timestamp())

    for i in stock_info.Close:
        closing.append(i)

    data = {}

    data['t'] = dates
    data['c'] = closing

    data = json.dumps(data)

    return data


def overview_data(ticker):
    stock = yfinance.Ticker(ticker)
    data = {}
    stock_info = stock.history(period='1d',interval='1m')
    latest_price = stock_info['Close'].iloc[-1]
    latest_open = stock.history(period='5d')['Open'].iloc[-1]
    change_pr = ((latest_price - latest_open) / abs(latest_open)) * 100
    change = latest_price - latest_open
    data['p'] = round(latest_price,2)
    data['cp'] = round(change_pr,2)
    data['c'] = round(change,2)

    data = json.dumps(data)

    return data









