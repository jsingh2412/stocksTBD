'use client'
import Favorites from "@components/Favorites"
import { useSession } from "next-auth/react";
import Image from "next/image";
import defaultPfp from "@public/assets/images/default-user-icon.png";

//Profile Component
const Profile = () => {
  const {data: session} = useSession();
  // The user name and pfp is updated using the data provided by the session. 
  // favorites are still hard coded.
  if(session && session.user){
    return (
      <div className="max-h-full w-full">
        <div className="text-4xl font-semibold h-1/2 bg-secondary-green w-full font-koho text-white flex-row"> 
        <Image src={session.user.image} width={125} height={125} />
          <div>{session.user.name}</div>
          <Favorites height="250px" width="100px"/>
        </div>
        <div className="h-1/2 bg-white w-full font-koho">
          <div>User Settings</div>
        </div>
      </div>
    );
  }
  // a default user preview for when a user is not signed in
  return (
    <div className="max-h-full w-full flex-col">
      <div className="text-4xl font-semibold h-1/2 bg-secondary-green w-full font-koho text-white">
        <div className="">
          <Image src={defaultPfp} width={125} height={125} />
          <div>Unknown User</div>
        </div>
        <Favorites height="250px" width="100px" />
      </div>
      <div className="h-1/2 bg-white w-full font-koho">
        <div>User Settings</div>
      </div>
    </div>
  );
};

export default Profile;
