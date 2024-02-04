import Favorites from "@components/Favorites"
//Profile Component
const Profile = () => {
  return (
    <div className="max-h-full w-full">
      <div className="text-4xl font-semibold h-1/2 bg-secondary-green w-full font-koho text-white"> 
        <div>Timmy Harold</div>
        <Favorites height="250px" width="100px"/>
      </div>
      <div className="h-1/2 bg-white w-full font-koho">
        <div>User Settings</div>
      </div>
    </div>
  );
};

export default Profile;
