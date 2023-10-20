//Prediction component on dashboard

import StockPrediction from "./Predictions/StockPrediction";

const Predictions = () => {
  return (
    <div className="bg-primary-gray w-1/2 h-1/2 m-4 p-4">
      <h1 className="basic_text_black text-2xl">Predictions</h1>
      <StockPrediction
        stock_image=""
        stock_name="Apple"
        stock_ticker="aapl"
        stock_percentage=""
        stock_suggestion="buy"
      />
      <StockPrediction />
      <StockPrediction />
    </div>
  );
};

export default Predictions;
