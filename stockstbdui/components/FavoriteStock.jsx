import Image from "next/image";

const FavoriteStock = (props) => {
  const stockColor =
    props.stock_direction == "up" ? "stock_color_green" : "stock_color_red";
  return (
    <div className="bg-white trendline flex items-center justify-center temp">
      <div className=" w-full stocks flex justify-start items-center">
        <div className="w-1/5 flex justify-start items-center pl-2">
          <Image
            src={props.stock_image}
            alt={props.stock_name}
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
        <h1 className="basic_text_black pl-1 xl:text-lg lg:text-md text-sm ">
          {props.stock_ticker}
        </h1>
        <p className="stocks lg:right-3 right-2 basic_text_black lg:text-md md:text-md text-sm">
          {props.stock_price}
        </p>
      </div>
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
