"use client";

//Information about stocks, temporarily hardcoded
import LineChart from "@components/Chart";
import StockPrediction from "@components/Predictions/StockPrediction";
import Image from "next/image";

import ParentSize from "@visx/responsive/lib/components/ParentSize";
import NewsDisplay from "@components/News/NewsDisplay";
import stockInfo from "@app/fakestockinfo";

import { useEffect, useState } from "react";

const data = [
  {
    year: 1975,
    month: 3,
    day: 17,
    amount: 0.804,
  },
  {
    year: 1976,
    month: 5,
    day: 2,
    amount: 1.35,
  },
  {
    year: 1977,
    month: 3,
    day: 17,
    amount: 7.928,
  },
  {
    year: 1978,
    month: 3,
    day: 17,
    amount: 15.357,
  },
  {
    year: 1989,
    month: 4,
    day: 27,
    amount: 18.357,
  },
  {
    year: 2010,
    month: 8,
    day: 12,
    amount: 15.357,
  },
];

//will need to look up the stock information then display it
//else have a loadin component

const Stocks = ({ stock }) => {
  const [stockInformation, setStockInformation] = useState();

  useEffect(() => {
    const companyInfo = stockInfo.find((company) => company.ticker === stock); // Assuming 'symbol' is the key
    if (companyInfo) {
      setStockInformation(companyInfo); // Set as an array if necessary
    }
  }, [stock]);
  console.log(stockInformation);
  return (
    <div className="stock_layout basic_text_black ">
      {stockInformation && stockInformation.company ? (
        <div className="stock_basic_info flex items-center bg-secondary-green pb-10 pt-10">
          <div className="flex-grow sm:pl-20 pl-5 basic_text">
            <h1 className="text-size">{stockInformation.ticker}</h1>
            <h2 className="text-size2">{stockInformation.company}</h2>
          </div>
          <div className="sm:pr-20 pr-5">
            <Image
              width={100}
              height={100}
              alt="company logo"
              src={stockInformation.image}
            />
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}

      <div className="stock_actual sm:pl-20 pl-5">
        <h1 className="text-2xl">Actual</h1>
        <div className="h-64">
          <ParentSize>
            {({ width, height }) => (
              <LineChart data={data} width={width} height={height} />
            )}
          </ParentSize>
        </div>
      </div>
      <div className="stock_predicted sm:pr-20 pr-5">
        <h1 className="text-2xl">Predicted</h1>
        <div className="h-64 w-100">
          <ParentSize>
            {({ width, height }) => (
              <LineChart data={data} width={width} height={height} />
            )}
          </ParentSize>
        </div>
      </div>
      <div className="past_predictions sm:pl-20 pl-5">
        <h1 className="text-2xl">Past predictions</h1>
        <StockPrediction
          stock_image="/assets/images/apple-logo.svg"
          stock_name="Apple"
          stock_ticker="AAPL"
          stock_percentage="3.5%"
          stock_suggestion="sell"
        />
        <StockPrediction
          stock_image="/assets/images/apple-logo.svg"
          stock_name="Apple"
          stock_ticker="AAPL"
          stock_percentage="3.5%"
          stock_suggestion="sell"
        />
        <StockPrediction
          stock_image="/assets/images/apple-logo.svg"
          stock_name="Apple"
          stock_ticker="AAPL"
          stock_percentage="3.5%"
          stock_suggestion="sell"
        />
      </div>
      <div className="stock_news sm:pr-20 pr-5">
        <h1 className="text-2xl">News</h1>
        <NewsDisplay />
        <NewsDisplay />
      </div>
    </div>
  );
};

export default Stocks;
