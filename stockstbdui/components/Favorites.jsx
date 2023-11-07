//Favorites component on dashboard

import FavoriteStock from "./FavoriteStock";

const Favorites = () => {
  const FavoritesStyle = {
    minHeight: "450px", // Set your desired minimum width in pixels
    minWidth: "150px",
  };
  return (
    <div className="bg-secondary-green w-full shadow" style={FavoritesStyle}>
      <h1 className="basic_text text-2xl p-3">Favorites</h1>
      <FavoriteStock
        stock_image="/assets/images/apple-logo.svg"
        stock_ticker="APPL"
        stock_price="174.21"
        stock_vector="M10 80 C 30 50, 50 30, 70 80 S 90 50, 110 80 C 130 110, 150 80, 170 70 S 190 60, 200 80"
        stock_name="apple"
        stock_direction="down"
      />
      <FavoriteStock
        stock_image="/assets/images/Microsoft-logo.svg"
        stock_ticker="MSFT"
        stock_price="303.21"
        stock_vector="M10 90 C 40 40, 80 60, 120 70 S 160 50, 250 60 C 240 70, 280 40, 320 70"
        stock_name="Microsoft"
        stock_direction="up"
      />
      <FavoriteStock
        stock_image="/assets/images/amazon-logo.svg"
        stock_ticker="AMZN"
        stock_price="140.39"
        stock_vector="M10 80 C 40 40, 80 60, 120 80 S 160 60, 200 80 C 240 20, 280 40, 320 80 C 360 160, 400 160, 500 160"
        stock_name="Amazon"
      />
      <FavoriteStock
        stock_image="/assets/images/meta-logo.svg"
        stock_ticker="META"
        stock_price="308.65"
        stock_vector="M10 80 C 40 90, 80 50, 120 60 S 160 80, 200 50 C 240 20, 280 40, 320 60"
        stock_name="apple"
        stock_direction="up"
      />
      <div className="flex justify-center">
        <h3>Add Favorites Image</h3>
      </div>
    </div>
  );
};

export default Favorites;
