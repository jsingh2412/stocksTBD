//default stock page to show a specific stocks information
//makes use of the Stocks component, will eventually dynamically fetch
//information about whatever stock was selected to arrive on this page.
import Stocks from "@components/Stocks/Stocks";
import React from "react";

const DefaultStock = () => {
  return (
    <div className="h-screen bg-secondary-green">
      <Stocks />
    </div>
  );
};

export default DefaultStock;
