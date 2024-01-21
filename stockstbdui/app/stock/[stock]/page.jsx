"use client";
//default stock page to show a specific stocks information
//makes use of the Stocks component, will eventually dynamically fetch
//information about whatever stock was selected to arrive on this page.
import Stocks from "@components/Stocks/Stocks";
import { useRouter } from "next/navigation";

const DefaultStock = ({ params }) => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      {/* <h1>This is the stock {params.stock}</h1> */}
      <Stocks stock={params.stock} />
    </div>
  );
};

export default DefaultStock;
