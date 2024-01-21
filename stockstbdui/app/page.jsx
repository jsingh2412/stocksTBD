"use client";
//The current landing page of our website and home of everything... the dashboard.

import Predictions from "@components/Predictions";
import Favorites from "@components/Favorites";
import News from "@components/News";
import SignUp from "@components/SignUp";
import Link from "next/link";
import LineChart from "@components/Chart";

import ParentSize from "@visx/responsive/lib/components/ParentSize";

const data = [
  {
    year: 1975,
    month: 3,
    day: 17,
    amount: 0.804,
  },
  {
    year: 1976,
    month: 5,
    day: 2,
    amount: 1.35,
  },
  {
    year: 1977,
    month: 3,
    day: 17,
    amount: 7.928,
  },
  {
    year: 1978,
    month: 3,
    day: 17,
    amount: 15.357,
  },
  {
    year: 1989,
    month: 4,
    day: 27,
    amount: 18.357,
  },
  {
    year: 2010,
    month: 8,
    day: 12,
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
      <div className="signup-content">
        <SignUp />
      </div>
    </div>
  );
};

export default DashBoard;
