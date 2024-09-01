from flask import Flask, request, jsonify
import stock

app = Flask(__name__)

@app.route("/price/<ticker>/<duration>")
def get_data(ticker, duration):
    graph_info = stock.stock_data(ticker,duration)

    return graph_info, 200

@app.route("/overview/<ticker>")
def getOverviewData(ticker):
    overViewInfo = stock.overview_data(ticker)

    return overViewInfo, 200

@app.route("/details/<ticker>")
def getDetailsData(ticker):
    detailInfo = stock.details_data(ticker)

    return detailInfo, 200


if __name__ == "__main__":
    app.run(debug=True)
