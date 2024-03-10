"use client";
import Predictions from "@components/Predictions";
import Favorites from "@components/Favorites";
import News from "@components/News";
import SignUp from "@components/SignUp";
import Link from "next/link";
import Chart from "@components/Chart";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import LandingPage from "@components/LandingPage";
import { useState, useEffect } from "react";
import axios from "axios";

//Main Dashboard that houses all components for layout.
const DashBoard = () => {
  const [data2, setData] = useState([
    {
      realtime_start: "2024-02-24",
      realtime_end: "2024-02-24",
      date: "2022-03-15",
      value: "3000",
    },
    {
      realtime_start: "2024-02-24",
      realtime_end: "2024-02-24",
      date: "2022-03-16",
      value: "2000",
    },
    {
      realtime_start: "2024-02-24",
      realtime_end: "2024-02-24",
      date: "2022-03-17",
      value: "4000",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/data2");
        setData(response.data.observations);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data2);
  return (
    //<LandingPage />
    <div className="layout m-4">
      <div className="predictions-content">
        <Predictions />
      </div>
      <div className="extra-content">
        {/*ParentSize haves the Chart responsive*/}
        <ParentSize>
          {({ width, height }) => (
            <Chart data={data2} width={width} height={height} />
          )}
        </ParentSize>
      </div>
      <div className="news-content">
        <Link href="news">
          <News />
        </Link>
      </div>
      <div className="favorites-content">
        <Favorites height="450px" width="250px" />
      </div>
      <div className="signup-content">
        <SignUp />
      </div>
    </div>
  );
};

export default Home;
