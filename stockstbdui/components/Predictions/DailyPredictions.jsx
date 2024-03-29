import Link from "next/link";
import StockPrediction from "./StockPrediction";
import { allStocks } from "../../app/fakeInfo";

//Page to show all company predictions Daily
//Load dynamically

const stockComponents = [];
allStocks.forEach((stock) => {
  stockComponents.push(
    <StockPrediction
      stock_image={`/assets/images/s&p500images/${stock.image}`}
      stock_name={stock.company}
      stock_ticker={stock.ticker}
      stock_percentage={stock.price}
      stock_suggestion={stock.prediction}
      key={stock.company}
    />
  );
});
const DailyPredictions = () => {
  return (
    <div className="m-20">
      <h1 className="text-3xl basic_text_black">September 26th</h1>
      <h3 className="text-2xl basic_text_black">Predictions</h3>
      {stockComponents}
    </div>
  );
};

export default DailyPredictions;
