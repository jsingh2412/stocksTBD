'use client';
import React from "react";
import {useSession, signOut} from "next-auth/react";
import Link from "next/link";

const HeaderLogIn = () => {
  const {data: session} = useSession();
  
  if(session && session.user){
    return (
        <div className="w-screen bg-primary-green flex items-center p-1">
            <button className="basic_text_italic text-xl pr-5 ml-auto" onClick={() => signOut({callbackUrl: "/login"})}>Sign Out</button>
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