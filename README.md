![build](https://img.shields.io/badge/build-pass-green)
![Language](https://img.shields.io/badge/language-Javascript-gree)
![Python](https://img.shields.io/badge/language-python-yellow)

# Trading Tool
In this webapp application you are going to be able to visualize the graph of a stock and some additional information, it also has an option to click on a point inside the graph enter a percentage and calculate what the price should be.

The project itself is full stack web application where i personaly coded the backend (Python --> Flask) and the frontend (JS --> React, Tailwind)


## **!! PLEASE DO NOT USE THIS FOR PRODUCTION ENV, THE YFINANCE API IS NOT AT ALL RELIABLE WITH ITS DATA !!**


## Getting started

To get started you will have to install NPM for the frontend web server, once you installed follow the steps:

### Backend
```bash
cd backend
```
Install dependices
```bash
pip install yfinance
```

Run the backend server

```bash
python3 api.py
```

### Frontend
Now because the webserver is run locally our webserver is going to apply some CORS policy and block our request, to fix that problem i would suggest opening chrome the following way

#### MacOS

```bash
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

#### Windows
```cmd
chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
```

after opening chrome without CORS policies we can start out webserver

```bash
cd frontend
```

If this is the first time starting this webserver you will have to first install the build

```bash
npm install
```

After that you can simply start it

```bash
npm start
```
### Some Error

If you are some error visualizing the stock AKA the API is not loading any data make sure to check that API has indeed started and if that is indeed the case you might have to change this part of the code inside
```javascript
const basePath = 'http://127.0.0.1:5000' // Change the URL to your backend server
```

## Author

### Il_kima