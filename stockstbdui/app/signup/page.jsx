/*
// This is the page for the login page, appears when clicking login on the top right of our website.
// Page will handle both logging in and sign up. Auth still needs to be done.
*/
'use client'
import React from 'react';
import Link from "next/link";

const SignUp = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        <div className='flex-col flex m-auto rounded-3xl mt-10 bg-primary-green p-7 max-w-fit shadow-md shadow-slate-400'>
          <div className="flex flex-col items-center gap-1 w-full mt-2">
              <div className="font-koho font-semibold m-auto text-5xl text-white pb-4">Sign Up</div>
          </div>
          <div className="mt-1 flex flex-col justify-center gap-0">
          <div className="flex-col items-center m-auto w-auto">
                <label htmlFor="password" className="text-sm font-koho text-white mb-1">First Name</label>
                <div className="bg-white h-auto rounded-md border-primary-green">
                  <input id="password" className="h-12 w-96 bg-transparent outline-none text-lg p-2" type="name" placeholder="John"/>
                </div>
              </div>
              <div className="flex-col items-center m-auto w-auto">
                <label htmlFor="password" className="text-sm font-koho text-white mb-1">Last Name</label>
                <div className="bg-white h-auto rounded-md border-primary-green">
                  <input id="password" className="h-12 w-96 bg-transparent outline-none text-lg p-2" type="name" placeholder="Doe"/>
                </div>
              </div>
              <div className="flex-col items-center m-auto w-auto">
                <label htmlFor="password" className="text-sm font-koho text-white mb-0 mt-0">Email</label>
                <div className="bg-white h-auto rounded-md border-primary-green">
                  <input id="password" className="h-12 w-96 bg-transparent border-none outline-none text-lg p-2" type="email" placeholder="example@example.com"/>
                </div>
              </div>
              <div className="flex-col items-center m-auto w-auto">
                <label htmlFor="password" className="text-sm font-koho text-white mb-1">Password</label>
                <div className="bg-white h-auto rounded-md border-primary-green">
                  <input id="password" className="h-12 w-96 bg-transparent outline-none text-lg p-2" type="password" placeholder="********"/>
                </div>
              </div>
              <div className="flex-col items-center m-auto w-auto">
                <label htmlFor="password" className="text-sm font-koho text-white mb-1">Re-enter Password</label>
                <div className="bg-white h-auto rounded-md border-primary-green">
                  <input id="password" className="h-12 w-96 bg-transparent outline-none text-lg p-2" type="password" placeholder="********"/>
                </div>
              </div>
          </div>
          <div className="flex items-center m-auto mt-2 text-base font-koho mb-2 text-white cursor-pointer"><span>Forgot your password? Click here!</span></div>
          <div className="flex gap-7 m-auto">
              <div className="flex justify-center items-center w-56 h-16 text-primary-green text-2xl bg-white cursor-pointer rounded-3xl font-koho font-bold">Sign Up</div>
          </div>
        </div>
        <Link href="login" className="mx-auto pt-2">
        <span className='text-xl font-koho font-semibold text-primary-green text-center mt-4'>Already have an account?</span>
        </Link>
        <button></button>
    </div>
    
  );
};

export default SignUp;