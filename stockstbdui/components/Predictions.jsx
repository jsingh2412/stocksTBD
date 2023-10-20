//Prediction component on dashboard

import StockPrediction from "./Predictions/StockPrediction";

const Predictions = () => {
  return (
    <div className="bg-primary-gray w-1/2 h-1/2 m-4 p-4 overflow-hidden">
      <h1 className="basic_text_black_italic text-2xl pb-2">Predictions</h1>
      <StockPrediction
        stock_image="/assets/images/apple-logo.svg"
        stock_name="Apple"
        stock_ticker="aapl"
        stock_percentage="7.5%"
        stock_suggestion="buy"
      />
      <StockPrediction
        stock_image="/assets/images/apple-logo.svg"
        stock_name="Apple"
        stock_ticker="aapl"
        stock_percentage="7.5%"
        stock_suggestion="buy"
      />
      <StockPrediction
        stock_image="/assets/images/apple-logo.svg"
        stock_name="Apple"
        stock_ticker="aapl"
        stock_percentage="7.5%"
        stock_suggestion="buy"
      />
      <StockPrediction
        stock_image="/assets/images/apple-logo.svg"
        stock_name="Apple"
        stock_ticker="aapl"
        stock_percentage="7.5%"
        stock_suggestion="buy"
      />
    </div>
  );
};

export default Predictions;
