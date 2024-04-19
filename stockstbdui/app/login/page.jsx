/*
* /login/page.jsx
* Jagroop Singh
* Date Created: 11/5/2023
* This is the page for the login page, appears when clicking login on the top right of our website.
* The page is responsible for handling login along with redirecting users for oAuth logins.
* It has a link for sign up at the bottom if the user needs it and the credentials logins
* are authenticated by a mysql database that is temporarily locally hosted.
*
* Date Changed: 1/20/2024
* Change formatting of page to make use of tailwind css instead of normal css.
* Date Changed: 1/27/2024
* Change page so that it is only responsible for login and not both login/signup. 
* Date Changed: 2/10/2024
* Add the functionality to handle GoogleOAuth login through next-auth.
* Date Changed: 2/24/2024
* UI changes for improving the look of page.
* Date Changed: 3/24/2024
* Addition of credential sign ins with the use of mySQL(not fully functioning).
* Date Changed: 3/29/2024
* Change to mongoDB instead of mySQL, credential sign ins are almost fully functioning(error testing needed).
* Date Changed: 3/31/2024
* Fully tested and functioning MongoDB sign in with the use of credentials.
*/
'use client'
import React, { useState } from 'react';
import { GoogleSignInButton } from '@components/AuthButtons';
import Link from "next/link";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LogIn = () => {
  // set of states to keep track of variables needed for signin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // initalize router
  const router = useRouter();

  // this is incharge of handling credentials signins by redirecting to the next-auth credentials implementation
  // if successfull the user is redirected to the dashboard
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // signIn has the type of signin passed by "credentials", email password and an option redirect are passed into this for next-auth
      const res = await signIn("credentials", {
        email, password, redirect:false,
      });

      if(res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("/dashboard");
    } catch(error){
      console.log(error);
    }
  };

  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='flex-col flex m-auto rounded-3xl mt-10 bg-primary-green p-7 max-w-fit shadow-md shadow-slate-400 items-center'>
          <div className="flex flex-col items-center gap-0 w-full mt-2">
              <div className="font-koho font-semibold m-auto text-5xl text-white pb-0">Login</div>
          </div>
          <div className="mt-1 flex flex-col justify-center gap-0">
              <div className="flex-col items-center m-auto w-auto">
                <label htmlFor="email" className="text-sm font-koho text-white mb-0 mt-0">Email</label>
                <div className="bg-white h-auto rounded-md border-primary-green">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="h-12 w-96 bg-transparent border-none outline-none text-lg p-2" type="email" placeholder="example@example.com"/>
                </div>
              </div>
              <div className="flex-col items-center m-auto w-auto">
                <label htmlFor="password" className="text-sm font-koho text-white mb-1">Password</label>
                <div className="bg-white h-auto rounded-md border-primary-green">
                  <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="h-12 w-96 bg-transparent outline-none text-lg p-2" type="password" placeholder="********"/>
                </div>
              </div>
          </div>
          { error && (
            <div className='bg-red-500 text-white w-fit text-md py-1 px-3 rounded-md mt-2 self-center'>
              {error}
            </div>
          )}
          <div className="flex items-center m-auto mt-3 text-base font-koho mb-3 text-white cursor-pointer"><span>Forgot your password? Click here!</span></div>
          <div className="flex gap-7 m-auto">
              <button onClick={handleSubmit} className="flex justify-center items-center w-56 h-16 text-primary-green text-2xl bg-white cursor-pointer rounded-lg font-koho font-bold">Login</button>
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
