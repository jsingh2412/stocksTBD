"use client";
import Predictions from "@components/Predictions";
import Favorites from "@components/Favorites";
import News from "@components/News";
import SignUp from "@components/SignUp";
import Link from "next/link";
import Chart from "@components/Chart";
import { chartInfo } from "../fakeInfo";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import LandingPage from "@components/LandingPage";
//Assigns data to chartInfo
const data = chartInfo;

//Main Dashboard that houses all components for layout.
const Dashboard = () => {
    return(
    <div className="layout m-4">
      <div className="predictions-content">
         <Predictions />
       </div>
       <div className="extra-content">
         {/*ParentSize haves the Chart responsive*/}
         <ParentSize>
           {({ width, height }) => (
             <Chart data={data} width={width} height={height} />
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
    )
}

export default Dashboard;