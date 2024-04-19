/*

*/
"use client";
import FavoriteStock from "../FavoriteStock";
import { useSession } from "next-auth/react";
import Image from "next/image";
import defaultPfp from "@public/assets/images/default-user-icon.png";
import Favorites from "@components/Favorites";

//Profile Component
const Profile = () => {
  const { data: session } = useSession();
  // The user name and pfp is updated using the data provided by the session.
  // Favorites are imported directly from the components
  if (session && session.user) {
    return (
      <div className="max-h-full w-full">
        <div className="text-4xl font-semibold h-1/2 bg-secondary-green w-full font-koho text-white flex-row ml-5">
          <Image src={session.user.image} width={125} height={125} />
          <div>{session.user.name}</div>
          <Favorites/>
        </div>
        <div className="h-1/2 bg-white w-full font-koho">
          <div>User Settings</div>
        </div>
      </div>
    );
  }
  // a default user preview for when a user is not signed in, used for testing prior to the sessions being created
  return (
    <div className="max-h-full w-full flex-col">
      <div className="text-4xl flex h-1/2 font-semibold bg-secondary-green w-full font-koho text-white pl-5 pt-10">
        <div>
          <Image src={defaultPfp} width={250} height={250} />
          <div className="text-center pb-4">Unknown User</div>
        </div>
        <div className="m-5 p-4">
          <h1 className="basic_text text-2xl p-3">Favorites</h1>
          <div className="flex gap-4">
            <FavoriteStock
              stock_image="/assets/images/s&p500images/nike.svg"
              stock_ticker="NKE"
              stock_price="93.98"
              stock_vector="M10 80 C 40 90, 80 50, 130 60 S 160 80, 220 50 C 240 20, 280 40, 320 60"
              stock_name="apple"
              stock_direction="up"
            />
            <FavoriteStock
              stock_image="/assets/images/s&p500images/apple.svg"
              stock_ticker="APPL"
              stock_price="171.48"
              stock_vector="M10 80 C 30 50, 50 30, 70 80 S 90 50, 110 80 C 130 110, 150 80, 170 70 S 190 60, 200 80"
              stock_name="apple"
              stock_direction="down"
            />
            <FavoriteStock
              stock_image="/assets/images/Microsoft-logo.svg"
              stock_ticker="MSFT"
              stock_price="420.72"
              stock_vector="M10 90 C 40 40, 80 60, 120 70 S 160 50, 250 60 C 240 70, 280 40, 320 70"
              stock_name="Microsoft"
              stock_direction="up"
            />
          </div>
        </div>
      </div>
      <div className="h-1/2 bg-white w-full font-koho">
        <div>User Settings</div>
      </div>
    </div>
  );
};

export default Profile;
