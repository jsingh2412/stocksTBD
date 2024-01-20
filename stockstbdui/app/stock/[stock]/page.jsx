"use client";
//default stock page to show a specific stocks information
//makes use of the Stocks component, will eventually dynamically fetch
//information about whatever stock was selected to arrive on this page.
import Stocks from "@components/Stocks/Stocks";
import { useRouter } from "next/navigation";

const DefaultStock = ({ params }) => {
  const router = useRouter();
  console.log(params);

  //console.log(router.query.stockId);
  // if (!router.isReady) {
  //   return <div>Loading...</div>; // Or any other loading state
  // }

  // const { stockid } = router.query;
  // console.log(router.query);
  return (
    <div className="h-screen bg-secondary-green">
      <h1>This is the stock {params.stock}</h1>
      <Stocks />
    </div>
  );
};

export default DefaultStock;
