import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { mockCompanyDetails, mockStockQuote } from "../constants/mock";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "./Chart";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { UserIcon } from "@heroicons/react/solid";
import { fetchDetailsData, fetchOverViewData } from "../api/stock-api";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  const [quote, setQuote] = useState({});
  const [details, setDetail] = useState({});

  useEffect(() => {
    const updateStockOveview = async () => {
      try{
        const result = await fetchOverViewData(stockSymbol);
        setQuote(result);
        console.log(quote.p);
      }
      catch (error){
        setQuote({});
        console.log(error);
      }
    };
    const updateDetailsData = async () => {
      try{
        const details = await fetchDetailsData(stockSymbol);
        setDetail(details);
      }
      catch (error){
        setDetail({});
        console.log(error);
      }
    };
    updateDetailsData();
    updateStockOveview();
  }, [stockSymbol])
  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={details.name} />
      </div>
      <div className="md:col-span-2 row-span-4">
        <Chart />
      </div>
      <div>
        <Overview
          symbol={stockSymbol}
          price={quote.p}
          change={quote.c}
          changePercent={quote.cp}
          currency={mockCompanyDetails.currency}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={details} />
      </div>
    </div>
  );
};

export default Dashboard;
