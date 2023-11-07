//Dashboard page
import Predictions from "@components/Predictions";
import Favorites from "@components/Favorites";
import News from "@components/News";
import SignUp from "@components/SignUp";
import Link from "next/link";

const DashBoard = () => {
  const newsStyle = {
    minHeight: "300px", // Set your desired minimum width in pixels
    minWidth: "350px",
  };
  return (
    <div className="h-screen flex">
      <Predictions />
      <div className="w-1/4 m-4 h-screen" style={newsStyle}>
        <Link href="news">
          <News />
        </Link>
      </div>
      <div className="w-1/4">
        <div className="flex justify-center items-center m-4">
          <Favorites />
        </div>
        <div className="flex justify-center items-center">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
