"use client";

import Chart from "@components/Chart";
import StockPrediction from "@components/Predictions/StockPrediction";
import Image from "next/image";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import NewsDisplay from "@components/News/NewsDisplay";
import { stockInfo, allStocks } from "@app/fakeInfo";
import { useEffect, useState } from "react";
const axios = require("axios");
import { connectMongoDB } from "@/backend/server/db/mongodb";
//Need to add Results
import tickerPrediction from "../../backend/server/models/tickerPrediction";

const getClosedValues = (data) => {
  const lows = [];
  for (let i = 0; i < data.length; i++) {
    const entryDate = data[i][0];
    const closePrice = data[i][1]["4. close"];
    const dateObj = {
      date: entryDate,
      value: closePrice,
    };
    lows.push(dateObj);
  }

  return lows;
};

//Stock component to display basic information, past predicitions, and news articles.
const Stocks = ({ stock }) => {
  const [stockInformation, setStockInformation] = useState("");
  const [data, setData] = useState([
    {
      date: "2022-03-15",
      value: "3000",
    },
    {
      date: "2022-03-16",
      value: "2000",
    },
    {
      date: "2022-03-17",
      value: "4000",
    },
  ]);
  const [prediction, setPrediction] = useState(100.19);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Connect to MongoDB
  //       await connectMongoDB();

  //       // Assuming stock is defined somewhere within the component
  //       const ticker = stock;

  //       // Query the database to find the document where the ticker is equal to the stock
  //       const result = await tickerPrediction.findOne({ ticker });
  //       console.log(result);
  //       // Extract the data you need from the result
  //       //setPrediction(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   // Call fetchData inside useEffect
  //   fetchData();
  // }, []); // Empty dependency array means this effect will run only once after the component mounts

  //need to do a useEffect to get real time stock data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/alphaData?symbol=${stock}`
        );
        const dates = Object.entries(response.data["Time Series (Daily)"]);
        const closeValues = getClosedValues(dates);
        closeValues.sort((a, b) => new Date(a.date) - new Date(b.date));
        setData(closeValues);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  //useEffect to get the dynamically loaded information
  useEffect(() => {
    const companyInfo = allStocks.find((company) => company.ticker === stock);
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
          <div className="sm:text-7xl text-2xl pr-5 basic_text">
            Prediction: {prediction}
          </div>
          <div className="sm:pr-20 pr-5">
            <Image
              width={200}
              height={200}
              alt="company logo"
              src={`/assets/images/s&p500images/${stockInformation.image}`}
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
          stock_image={`/assets/images/s&p500images/${stockInformation.image}`}
          stock_name={stockInformation.company}
          stock_ticker={stockInformation.ticker}
          stock_percentage="3.5%"
          stock_suggestion="buy"
        />
        <StockPrediction
          stock_image={`/assets/images/s&p500images/${stockInformation.image}`}
          stock_name={stockInformation.company}
          stock_ticker={stockInformation.ticker}
          stock_percentage="7.5%"
          stock_suggestion="buy"
        />
        <StockPrediction
          stock_image={`/assets/images/s&p500images/${stockInformation.image}`}
          stock_name={stockInformation.company}
          stock_ticker={stockInformation.ticker}
          stock_percentage="4.5%"
          stock_suggestion="sell"
        />
      </div>
      <div className="stock_news sm:pr-20 pr-5">
        <h1 className="text-2xl">News</h1>
        <NewsDisplay
          news_title={`News related to ${stockInformation.company}`}
          news_description="Description for this news article"
          news_type="Finance"
          news_image="/assets/images/news-image.webp"
        />
        <NewsDisplay
          news_title={`News related to ${stockInformation.company}`}
          news_description="Description for this news article"
          news_type="Finance"
          news_image="/assets/images/news-image.webp"
        />
      </div>
    </div>
  );
};

export default Stocks;
