//Information about stocks
import Image from "next/image";

const Stocks = () => {
  return (
    <div className="stock_layout p-10">
      <div className="stock_basic_info">
        <p>go back</p>
        <h1>Ticker</h1>
        <h2>Name</h2>
        <Image
          width={100}
          height={100}
          src="/assets/images/Microsoft-logo.svg"
        />
      </div>
      <div className="stock_actual">Actual</div>
      <div className="stock_predicted">Predicted</div>
      <div className="past_predictions">past</div>
      <div className="stock_news">news articles</div>
    </div>
  );
};

export default Stocks;
