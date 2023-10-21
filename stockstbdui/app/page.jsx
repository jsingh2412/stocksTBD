//Dashboard page
import Predictions from "@components/Predictions";
import Favorites from "@components/Favorites";
import News from "@components/News";
import SignUp from "@components/SignUp";

const DashBoard = () => {
  return (
    <div className="h-screen flex">
      <Predictions />
      <News />
      <Favorites />
      <SignUp />
    </div>
  );
};

export default DashBoard;
