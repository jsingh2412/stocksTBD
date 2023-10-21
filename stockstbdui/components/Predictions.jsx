//Prediction component on dashboard

import StockPrediction from "./Predictions/StockPrediction";

const Predictions = () => {
  return (
    <div className="bg-primary-gray w-1/2 h-1/2 m-4 p-4 overflow-hidden">
      <h1 className="basic_text_black_italic text-2xl pb-2">Predictions</h1>
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

export default Predictions;
