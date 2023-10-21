import Image from "next/image";

const FavoriteStock = (props) => {
  const stockColor =
    props.stock_direction == "up" ? "stock_color_green" : "stock_color_red";
  return (
    <div className="bg-white h-1/6 m-3 trendline flex items-center justify-center temp">
      <div className="w-1/5 flex justify-start items-center stocks left-2">
        <Image
          src={props.stock_image}
          alt={props.stock_name}
          width={60}
          height={60}
          className="object-contain"
        />
        <h1 className="basic_text_black text-xl">{props.stock_ticker}</h1>
      </div>
      <p className="stocks right-5 basic_text_black text-lg">
        {props.stock_price}
      </p>
      <svg viewBox="10 23 190 100" className="">
        <path
          d={props.stock_vector}
          className={`curved-trendline-path ${stockColor}`}
        />
      </svg>
    </div>
  );
};

export default FavoriteStock;
