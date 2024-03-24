/*
// This is the page for the login page, appears when clicking login on the top right of our website.
// The page is responsible for handling login along with redirecting users for oAuth logins.
// It has a link for sign up at the bottom if the user needs it and the credentials logins
// are authenticated by a mysql database that is temporarily locally hosted.
*/
'use client'
import React from 'react';
import { GoogleSignInButton } from '@components/AuthButtons';
import Link from "next/link";
//import checkUser from "@backend/server/db/db.js";
//onClick={() => checkUser(email.current.value, password.current.value)}

const LogIn = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='flex-col flex m-auto rounded-3xl mt-10 bg-primary-green p-7 max-w-fit shadow-md shadow-slate-400 items-center'>
          <div className="flex flex-col items-center gap-0 w-full mt-2">
              <div className="font-koho font-semibold m-auto text-5xl text-white pb-0">Login</div>
          </div>
          <div className="mt-1 flex flex-col justify-center gap-0">
              <div className="flex-col items-center m-auto w-auto">
                <label htmlFor="password" className="text-sm font-koho text-white mb-0 mt-0">Email</label>
                <div className="bg-white h-auto rounded-md border-primary-green">
                  <input id="email" className="h-12 w-96 bg-transparent border-none outline-none text-lg p-2" type="email" placeholder="example@example.com"/>
                </div>
              </div>
              <div className="flex-col items-center m-auto w-auto">
                <label htmlFor="password" className="text-sm font-koho text-white mb-1">Password</label>
                <div className="bg-white h-auto rounded-md border-primary-green">
                  <input id="password" className="h-12 w-96 bg-transparent outline-none text-lg p-2" type="password" placeholder="********"/>
                </div>
              </div>
          </div>
          <div className="flex items-center m-auto mt-3 text-base font-koho mb-3 text-white cursor-pointer"><span>Forgot your password? Click here!</span></div>
          <div className="flex gap-7 m-auto">
              <button className="flex justify-center items-center w-56 h-16 text-primary-green text-2xl bg-white cursor-pointer rounded-lg font-koho font-bold">Login</button>
          </div>
          <div className='flex items-center mt-6'>
          <div className="w-36 border-t border-1 border-white flex-grow mx-2"></div>
          <span className='text-xl font-koho font-semibold text-white text-center'>or</span>
          <div className="w-36 border-t border-1 border-white flex-grow mx-2"></div>
        </div>
        <GoogleSignInButton />
        </div>
        <div className='flex items-center mt-6'>
          <div className="w-28 border-t border-1 border-primary-green flex-grow mx-2"></div>
          <span className='text-xl font-koho font-semibold text-primary-green text-center'>New to StocksTBD?</span>
          <div className="w-28 border-t border-1 border-primary-green flex-grow mx-2"></div>
        </div>
        <Link href="signup" className="mx-auto">
        <button className="mt-3 w-80 bg-primary-green text-white font-koho font-semibold text-xl px-6 py-2 rounded-lg focus:outline-none focus:shadow-outline shadow-sm shadow-slate-400">
          Create your new account
        </button>
        </Link>
        <span className="border-b border-solid border-gray-500"></span>
    </div>
    
  );
};

export default LogIn;
