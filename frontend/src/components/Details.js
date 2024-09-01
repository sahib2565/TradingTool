import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Card from "./Card";
import OrderContext from "../context/OrderContext";

const Details = ({ details }) => {
  const { darkMode } = useContext(ThemeContext);
  const { order } = useContext(OrderContext);
  const [target, setTarget] = useState(0);
  const [change, setChange] = useState(0);

  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    // Price: "B/S Price",
    //ipo: "IPO Date",
    //marketCapitalization: "Market Capitalization",
    //finnhubIndustry: "Industry",
  };

  const calculateTarget = (value) => {
    // const value = "1.2"
    const v = parseFloat(value);
    // console.log(`Price: 226`);
    const solution = order*((100+v)/100);
    setTarget(solution.toFixed(2));
    // console.log(`The target is: ${target_res}`);
  }

  const updateChange = () => {
    setChange(change);
    calculateTarget(change);
  };

  return (
    <Card>
      <ul
        className={`w-full h-3/4 flex flex-col justify-between divide-y-1 ${
          darkMode ? "divide-gray-800" : null
        }`}
      >
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-between items-center">
              <span>{detailsList[item]}</span>
              <span className="font-bold">
                  {details[item]}
              </span>
            </li>
          );
        })}
        <li className="flex-1 flex justify-between items-center">
        <span>B/S Price</span>
        <span className="font-bold">{order}</span>
        </li>
      </ul>
      <div className = {`flex-1 flex justify-between items-center`}>
      <div
      className={`w-3/6 flex items-center my-4 border-2 rounded-md relative z-50 w-96 ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`}
    >
      <input
        type = "text"
        inputmode="numeric"
        value={change}
        placeholder="Wished % profit"
        class = {`w-full px-4 py-2 focus:outline-none rounded-md ${
          darkMode ? "bg-gray-900" : null
        }`}
        onChange={(event) => setChange(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            updateChange();
          }}}
      />
      <button
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2"
        onClick = { updateChange }
      >
      </button>
      </div>
      <h1
        className="inline-block pl-5"
      >{target}</h1>
      </div>
    </Card>
  );
};

export default Details;
