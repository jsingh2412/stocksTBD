'use client';
import React from "react";
import {useSession, signOut} from "next-auth/react";
import Link from "next/link";

const HeaderLogIn = () => {
  const {data: session} = useSession();
  
  if(session && session.user){
    console.log("WE IN");
    return (
        <div className="w-screen bg-primary-green flex items-center p-1">
            <p>{session.user.name}</p>
            <button className="basic_text_italic text-xl pr-5 ml-auto" onClick={() => signOut()}>Sign Out</button>
        </div>
    );
  }

  return (
    <div className="w-screen bg-primary-green flex items-center p-1">
        <Link href="login" className="ml-auto">
        <p className="basic_text_italic text-xl pr-5">Log In</p>
        </Link>
    </div>
    );
}

export default HeaderLogIn;