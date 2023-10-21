import Image from "next/image";

//need to fix responsiveness with height and image leaving the space
const StockPrediction = (props) => {
  return (
    <div className="bg-stock-green w-90 basic_text h-1/5 flex justify-evenly text-center items-center p-2 m-2">
      <div className="w-1/5 flex justify-start items-center">
        <Image
          src={props.stock_image}
          alt={props.stock_name}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
      <div className="w-3/5">
        <h1>{props.stock_name}</h1>
        <h3>{props.stock_ticker}</h3>
      </div>
      <p className="w-1/5 flex justify-end">{props.stock_percentage}</p>
    </div>
  );
};

export default StockPrediction;
