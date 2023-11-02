//Dashboard page
import Predictions from "@components/Predictions";
import Favorites from "@components/Favorites";
import News from "@components/News";
import SignUp from "@components/SignUp";
import Link from "next/link";

const DashBoard = () => {
  return (
    <div className="h-screen flex">
      <Predictions />
      <div className="w-1/4 m-4 bg-red-500">
        <Link href="news">
          <News />
        </Link>
      </div>
      <Favorites />
      <SignUp />
    </div>
  );
};

export default DashBoard;
