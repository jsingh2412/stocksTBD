import Link from "next/link";
import StockPrediction from "./StockPrediction";

//Page to show all company predictions Daily
//Load dynamically
const DailyPredictions = () => {
  return (
    <div className="m-20">
      <h1 className="text-3xl basic_text_black">September 26th</h1>
      <h3 className="text-2xl basic_text_black">Predictions</h3>
      <Link href="/predictions/filter">
        <h5>Go to filter page</h5>
      </Link>
      <StockPrediction
        stock_image="/assets/images/apple-logo.svg"
        stock_name="Apple"
        stock_ticker="AAPL"
        stock_percentage="3.5%"
        stock_suggestion="sell"
      />
      <StockPrediction
        stock_image="/assets/images/Microsoft-logo.svg"
        stock_name="Microsoft"
        stock_ticker="MSFT"
        stock_percentage="2.7%"
        stock_suggestion="buy"
      />
      <StockPrediction
        stock_image="/assets/images/amazon-logo.svg"
        stock_name="Amazon"
        stock_ticker="AMZN"
        stock_percentage="1.2%"
        stock_suggestion="sell"
      />
      <StockPrediction
        stock_image="/assets/images/meta-logo.svg"
        stock_name="META"
        stock_ticker="META"
        stock_percentage="7.5%"
        stock_suggestion="buy"
      />
      <StockPrediction
        stock_image="/assets/images/apple-logo.svg"
        stock_name="Apple"
        stock_ticker="AAPL"
        stock_percentage="3.5%"
        stock_suggestion="sell"
      />
      <StockPrediction
        stock_image="/assets/images/Microsoft-logo.svg"
        stock_name="Microsoft"
        stock_ticker="MSFT"
        stock_percentage="2.7%"
        stock_suggestion="buy"
      />
      <StockPrediction
        stock_image="/assets/images/amazon-logo.svg"
        stock_name="Amazon"
        stock_ticker="AMZN"
        stock_percentage="1.2%"
        stock_suggestion="sell"
      />
      <StockPrediction
        stock_image="/assets/images/meta-logo.svg"
        stock_name="META"
        stock_ticker="META"
        stock_percentage="7.5%"
        stock_suggestion="buy"
      />
    </div>
  );
};

export default DailyPredictions;
