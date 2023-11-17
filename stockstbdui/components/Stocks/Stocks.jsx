//Information about stocks
import LineChart from "@components/Chart";
import NewsArticle from "@components/NewsArticle";
import StockPrediction from "@components/Predictions/StockPrediction";
import Image from "next/image";

const Stocks = () => {
  return (
    <div className="stock_layout pl-20 pr-20 basic_text">
      <div className="stock_basic_info flex items-center">
        <div className="flex-grow">
          <h1 className="text-size">MSFT</h1>
          <h2 className="text-size2">Microsoft</h2>
        </div>
        <div>
          <Image
            width={100}
            height={100}
            src="/assets/images/Microsoft-logo.svg"
          />
        </div>
      </div>
      <div className="stock_actual">
        <h1 className="text-2xl">Actual</h1>
        <div>Chart</div>
      </div>
      <div className="stock_predicted">
        <h1 className="text-2xl">Predicted</h1>
        <div>Chart</div>
      </div>
      <div className="past_predictions">
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
      <div className="stock_news">
        <h1 className="text-2xl">News</h1>
        <NewsArticle />
      </div>
    </div>
  );
};

export default Stocks;
