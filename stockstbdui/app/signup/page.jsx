/*
// This is the page for the login page, appears when clicking login on the top right of our website.
// Page will handle both logging in and sign up. Auth still needs to be done.
*/
'use client'
import React from 'react';

const SignUp = () => {
  return (
    <div className='flex-col flex m-auto rounded-3xl mt-10 bg-primary-green p-7 max-w-fit'>
      <div className="flex flex-col items-center gap-1 w-full mt-2">
        <div className="font-koho font-semibold m-auto text-5xl text-white pb-4">Login</div>
      </div>
      <div className="mt-1 flex flex-col justify-center gap-5">
        <div className="flex items-center m-auto w-auto bg-white h-10 rounded-md">
        <input className="h-12 w-96 bg-transparent border-none outline-none text-lg" type="email" placeholder="example@this.com"/>
        </div>
        <div className="flex items-center m-auto w-auto bg-white h-10 rounded-md">
        <input className="h-12 w-96 bg-transparent border-none outline-none text-lg" type="password" placeholder="********"/>
        </div>
      </div>
      <div className="flex items-center m-auto mt-2 text-base font-koho mb-2 text-white cursor-pointer"><span>Forgot your password? Click here!</span></div>
      <div className="flex gap-7 m-auto">
        <div className="flex justify-center items-center w-56 h-16 text-primary-green text-2xl bg-white cursor-pointer rounded-full font-koho font-bold">Login</div>
      </div>
    </div>
    
  );
};

export default SignUp;