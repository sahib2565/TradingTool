from flask import Flask, request, jsonify
import stock

app = Flask(__name__)

@app.route("/price/<ticker>/<duration>")
def get_data(ticker="AAPL",duration="5d"):
    graph_info = stock.stock_data(ticker,duration)

    return graph_info, 200


if __name__ == "__main__":
    app.run(debug=True)
