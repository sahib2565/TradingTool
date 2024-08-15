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

