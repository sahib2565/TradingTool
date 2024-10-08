import { XIcon, SearchIcon } from "@heroicons/react/solid";
import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";


const Search = () => {
  const { darkMode } = useContext(ThemeContext);
  const { setStockSymbol } = useContext(StockContext);

  const [input, setInput] = useState("");


  const clear = () => {
    setInput("");
    // setBestMatches([]);
  };

  const updateSymbol = () => {
    setStockSymbol(input);
  };

  return (
    <div
      className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`}
    >
      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md ${
          darkMode ? "bg-gray-900" : null
        }`}
        placeholder="Search stock..."
        onChange={(event) => setInput(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            updateSymbol();
          }
        }}
      />
      {input && (
        <button onClick={clear} className="m-1">
          <XIcon className="h-4 w-4 fill-gray-500" />
        </button>
      )}
      <button
        // onClick={updateBestMatches}
        onClick={ updateSymbol }
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2"
      >
        <SearchIcon className="h-4 w-4 fill-gray-100" />
      </button>
    </div>
  );
};

export default Search;
