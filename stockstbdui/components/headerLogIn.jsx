/*
* headerLogIn.jsx
* Jagroop Singh
* Date Created: 3/9/2024
* This handles the Login within the header and ensure it is updated as needed.
* When a user is signed in, it switches to sign out, and remains as sign in otherwise.
*
* Date Changed: 3/24/2024
* Added the ability to access the profile page from the header along with some UI changes.
*/
'use client';
import React from "react";
import {useSession, signOut} from "next-auth/react";
import Link from "next/link";
import headerPic from "@public/assets/images/profile-header.png"

const HeaderLogIn = () => {
  const {data: session} = useSession();
  // Sign out is handled by a pre-existing function within the next-auth library.
  // Once signed out, the user will return to the login page.

  // If the user is authenticated we will return the signout along with a link to the profile so the user may access it.
  if(session && session.user){
    return (
        <div className="w-screen bg-primary-green flex p-1">
          <div className="ml-auto flex">
            <Link className='basic_text_italic text-xl pr-1' href="/profile">
              <img src={headerPic} alt="Profile" width={20} height={20}/>
            </Link>
            <button className="basic_text_italic text-xl pr-5" onClick={() => signOut({callbackUrl: "/login"})}>Sign Out</button>
          </div>
        </div>
    );
  }
  // If the user is not authenticated a link to Login will be returned for the user to be able to access the login page.
  return (
    <div className="w-screen bg-primary-green flex items-center p-1">
        <Link href="login" className="ml-auto">
        <p className="basic_text_italic text-xl pr-5">Login</p>
        </Link>
    </div>
    );
}

export default HeaderLogIn;