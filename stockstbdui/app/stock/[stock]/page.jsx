"use client";
import Stocks from "@components/Stocks/Stocks";
import { useRouter } from "next/navigation";

const DefaultStock = ({ params }) => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <Stocks stock={params.stock} />
    </div>
  );
};

export default DefaultStock;
