import Predictions from "@components/Predictions";
import Favorites from "@components/Favorites";
import News from "@components/News";
import SignUp from "@components/SignUp";
import Link from "next/link";

const DashBoard = () => {
  return (
    <div className="layout bg-blue-500">
      <div className="predictions-content">
        <Predictions />
      </div>
      <div className="extra-content">Extra Content</div>
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
