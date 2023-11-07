import Predictions from "@components/Predictions";
import Favorites from "@components/Favorites";
import News from "@components/News";
import SignUp from "@components/SignUp";
import Link from "next/link";

const DashBoard = () => {
  const newsStyle = {
    minHeight: "300px",
    minWidth: "250px",
  };
  const predictionStyle = {
    minHeight: "400px",
    minWidth: "150px",
  };

  return (
    <div className="flex justify-center items-center m-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3 bg-blue-500" style={predictionStyle}>
          <Predictions />
        </div>
        <div className="col-span-1 bg-red-100" style={newsStyle}>
          <div className="h-full">
            <Link href="news">
              <News />
            </Link>
          </div>
        </div>
        <div className=" col-span-1 bg-yellow-500">
          <Favorites />
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
