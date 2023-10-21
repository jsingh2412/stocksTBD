//Favorites component on dashboard

import FavoriteStock from "./FavoriteStock";

const Favorites = () => {
  return (
    <div className="bg-secondary-green w-1/6 h-3/5 m-4">
      <h1 className="basic_text text-2xl p-3">Favorites</h1>
      <FavoriteStock
        stock_image=""
        stock_ticker=""
        stock_price=""
        stock_vector=""
      />
      <FavoriteStock
        stock_image=""
        stock_ticker=""
        stock_price=""
        stock_vector=""
      />
    </div>
  );
};

export default Favorites;
