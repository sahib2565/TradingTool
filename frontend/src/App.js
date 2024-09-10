import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";
import OrderContext from "./context/OrderContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("FB");
  const [order, setOrder] = useState(0);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol}} >
      <OrderContext.Provider value={{ order,setOrder}} >
        <Dashboard/>
        </OrderContext.Provider>
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;