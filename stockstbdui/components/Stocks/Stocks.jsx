"use client";

import Chart from "@components/Chart";
import StockPrediction from "@components/Predictions/StockPrediction";
import Image from "next/image";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import NewsDisplay from "@components/News/NewsDisplay";
import { stockInfo } from "@app/fakeInfo";
import { useEffect, useState } from "react";
const axios = require("axios");

const getClosedValues = (data) => {
  const lows = [];
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    const dateValue = keys[i];
    const entry = data[dateValue];
    console.log(entry);
    const close = entry["4. close"];
    console.log(close);
    const dateObj = {
      date: dateValue,
      value: close,
    };
    lows.push(dateObj);
  }

  return lows;
};

//Stock component to display basic information, past predicitions, and news articles.
const Stocks = ({ stock }) => {
  const [stockInformation, setStockInformation] = useState();
  const [data, setData] = useState();

  //need to do a useEffect to get real time stock data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   `http://localhost:3001/alphaData?symbol=${stock}`
        // );
        //const dates = Object.entries(response.data["Time Series (Daily)"]);
        const data = {
          "2024-02-20": {
            "1. open": "187.6400",
            "2. high": "188.7700",
            "3. low": "183.0600",
            "4. close": "183.4400",
            "5. volume": "4247181",
          },
          "2024-02-21": {
            "1. open": "182.5600",
            "2. high": "183.0300",
            "3. low": "178.7500",
            "4. close": "179.7000",
            "5. volume": "4728473",
          },

          "2024-02-22": {
            "1. open": "182.4500",
            "2. high": "184.5500",
            "3. low": "181.9300",
            "4. close": "184.2100",
            "5. volume": "5078398",
          },
          "2024-02-23": {
            "1. open": "185.6000",
            "2. high": "185.6000",
            "3. low": "185.6000",
            "4. close": "185.6000",
            "5. volume": "90",
          },
        };
        const closeValues = getClosedValues(data);
        setData(closeValues);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  //useEffect to get the dynamically loaded information
  useEffect(() => {
    const companyInfo = stockInfo.find((company) => company.ticker === stock);
    if (companyInfo) {
      setStockInformation(companyInfo);
    }
  }, [stock]);
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
              <Chart data={data} width={width} height={height} />
            )}
          </ParentSize>
        </div>
      </div>
      <div className="stock_predicted sm:pr-20 pr-5">
        <h1 className="text-2xl">Predicted</h1>
        <div className="h-64 w-100">
          <ParentSize>
            {({ width, height }) => (
              <Chart data={data} width={width} height={height} />
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
