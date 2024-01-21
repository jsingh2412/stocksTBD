//Prediction component on dashboard
import StockPrediction from "./Predictions/StockPrediction";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

const Predictions = () => {
  return (
    <div className="bg-primary-gray h-full p-4 shadow overflow-hidden">
      <div className="flex justify-between">
        <h1 className="basic_text_black_italic text-2xl pb-2">Predictions</h1>
        <Link href="predictions">
          <EastIcon />
        </Link>
      </div>
      {/* would have these load dynamically and fill information.  */}
      <Link href={`/stock/AAPL`}>
        <StockPrediction
          stock_image="/assets/images/apple-logo.svg"
          stock_name="Apple"
          stock_ticker="AAPL"
          stock_percentage="3.5%"
          stock_suggestion="sell"
        />
      </Link>
      <Link href={`/stock/MSFT`}>
        <StockPrediction
          stock_image="/assets/images/Microsoft-logo.svg"
          stock_name="Microsoft"
          stock_ticker="MSFT"
          stock_percentage="2.7%"
          stock_suggestion="buy"
        />
      </Link>
      <Link href={`/stock/AMZN`}>
        <StockPrediction
          stock_image="/assets/images/amazon-logo.svg"
          stock_name="Amazon"
          stock_ticker="AMZN"
          stock_percentage="1.2%"
          stock_suggestion="sell"
        />
      </Link>
      <Link href={`/stock/META`}>
        <StockPrediction
          stock_image="/assets/images/meta-logo.svg"
          stock_name="META"
          stock_ticker="META"
          stock_percentage="7.5%"
          stock_suggestion="buy"
        />
      </Link>
    </div>
  );
};

export default Predictions;
