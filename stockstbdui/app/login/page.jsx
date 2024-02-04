/*
// This is the page for the login page, appears when clicking login on the top right of our website.
// Page will handle both logging in and sign up. Auth still needs to be done.
// --change colors to better correspond with rest of website
*/
'use client'
import React from 'react';
import './login.css';

const LogIn = () => {
  //used to change states between login/signup

  return (
    <div className='flex-col flex m-auto rounded-3xl mt-10 bg-primary-green p-7 max-w-fit'>
      <div className="flex flex-col items-center gap-1 w-full mt-2">
        <div className="font-koho font-semibold m-auto text-5xl text-white pb-4">Login</div>
      </div>
      <div className="mt-1 flex flex-col justify-center gap-5">
        <div className="input">
        <input type="email" placeholder="example@this.com"/>
        </div>
        <div className="input">
        <input type="password" placeholder="********"/>
        </div>
      </div>
      <div className="forgot-password"><span>Forgot your password? Click here!</span></div>
      <div className="flex gap-7 m-auto">
        <div className="submit_gray">Login</div>
      </div>
    </div>
    
  );
};

export default LogIn;
