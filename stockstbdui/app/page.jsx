"use client";

import Predictions from "@components/Predictions";
import Favorites from "@components/Favorites";
import News from "@components/News";
import SignUp from "@components/SignUp";
import Link from "next/link";
import LineChart from "@components/Chart";

import ParentSize from "@visx/responsive/lib/components/ParentSize";

const data = [
  {
    country: "DENMARK",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 1975,
    amount: 0.804,
  },
  {
    country: "DENMARK",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 1976,
    amount: 1.35,
  },
  {
    country: "DENMARK",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 1977,
    amount: 7.928,
  },
  {
    country: "DENMARK",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 1978,
    amount: 15.357,
  },
  {
    country: "DENMARK",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 1989,
    amount: 18.357,
  },
  {
    country: "Chase",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 2010,
    amount: 15.357,
  },
];

const DashBoard = () => {
  return (
    <div className="layout m-4">
      <div className="predictions-content">
        <Predictions />
      </div>
      <div className="extra-content">
        <ParentSize>
          {({ width, height }) => (
            <LineChart data={data} width={width} height={height} />
          )}
        </ParentSize>
      </div>
      <div className="news-content">
        <Link href="news">
          <News />
        </Link>
      </div>
      <div className="favorites-content">
        <Favorites />
      </div>
      <div className="signup-content">{/* <SignUp /> */}</div>
    </div>
  );
};

export default DashBoard;
