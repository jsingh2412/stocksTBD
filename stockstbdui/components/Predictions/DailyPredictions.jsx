/*
* DailyPredictions.jsx
* stocksTBD
* Date Created: 4/21/2024
* This file lists all of the stocks available on our website and can be filtered by
* the ticker name, either by the full name or by the starting letters of the ticker.
*/


'use client'
import Link from "next/link";
import StockPrediction from "./StockPrediction";
import { allStocks } from "../../app/fakeInfo";
import React, {useState} from "react"; 


const DailyPredictions = () => { 
  const [filter, setFilter] = useState(''); //set up filter

  const filteredStocks = allStocks.filter(stock=> stock.ticker.toLowerCase().includes(filter.toLowerCase()));
  //use premade filter to show stocks based on starting letters of ticker


  const stockComponents = filteredStocks.map(stock => (
    <StockPrediction
      stock_image={`/assets/images/s&p500images/${stock.image}`}
      stock_name={stock.company}
      stock_ticker={stock.ticker}
      stock_percentage={stock.price}
      stock_suggestion={stock.prediction}
      key={stock.company}
    />
    //controls which stocks are being shown and what information is being shown based on filtered
  ))

  return (
    <div className="m-20">
      <h1 className="text-3xl basic_text_black">March 31st, 2024</h1> 
      <h3 className="text-2xl basic_text_black">Predictions</h3>
      <input
        type="text"
        placeholder="Filter by ticker..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-1 mb-4"
      />
      {stockComponents}
    </div>
  );
};
// show the date, predictions, and an input area for text for the filter
export default DailyPredictions;
