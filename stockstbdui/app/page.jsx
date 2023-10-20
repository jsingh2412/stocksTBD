//Dashboard page
import Predictions from "@components/Predictions";
import Favorites from "@components/Favorites";
import News from "@components/News";

const DashBoard = () => {
  return (
    <div className="h-screen flex">
      <Predictions />
      <Favorites />
      <News />
    </div>
  );
};

export default DashBoard;
