import Image from "next/image";

const FavoriteStock = (props) => {
  return (
    <div className="bg-white h-1/6 m-3 trendline flex items-center justify-center temp">
      <div className="w-1/5 flex justify-start items-center stocks">
        <Image
          src={props.stock_image}
          alt={props.stock_name}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
      <h1 className="stocks">{props.stock_name}</h1>
      <svg viewBox="10 20 190 100" className="">
        <path
          d="M10 80 C 30 50, 50 30, 70 80 S 90 50, 110 80 C 130 110, 150 80, 170 70 S 190 60, 200 80"
          className="curved-trendline-path"
        />
      </svg>
    </div>
  );
};

export default FavoriteStock;
