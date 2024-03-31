/*
// This is the page for the login page, appears when clicking login on the top right of our website.
// Page will handle both logging in and sign up. Auth still needs to be done.
*/
'use client'
import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if(!name || !email || !password || !repassword){
      setError("All fields are required.");
      return;
    }
    if(password!=repassword){
      setError("Passwords must match.")
      return;
    }

    try {
      const res1 = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({email}),
      });

      const {user} = await res1.json();

      if (user){
        setError("User already exists.");
        return
      }

      const res = await fetch("api/register", {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, 
          email,
          password,
        }),
      });

      if (res.ok) {
        setName("");
        setEmail("");
        setPassword("");
        setRePassword("");
        setError("");
        router.push("/login");
      }

    } catch (error) {
      console.log(error);
    }

    //setError("");
  };

  return (
    <div className='w-full flex flex-col items-center'>
        <div className='flex-col flex m-auto rounded-3xl mt-10 bg-primary-green p-7 max-w-fit shadow-md shadow-slate-400'>
          <div className="flex flex-col items-center gap-1 w-full mt-2">
              <div className="font-koho font-semibold m-auto text-5xl text-white pb-4">Sign Up</div>
          </div>
          <div className="mt-1 flex flex-col justify-center gap-0">
              <div className="flex-col items-center m-auto w-auto">
                <label htmlFor="name" className="text-sm font-koho text-white mb-1">Full Name</label>
                <div className="bg-white h-auto rounded-md border-primary-green">
                  <input value={name} onChange={(e) => setName(e.target.value)} id="name" className="h-12 w-96 bg-transparent outline-none text-lg p-2" type="text" placeholder="John Doe"/>
                </div>
              </div>
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
              <div className="flex-col items-center m-auto w-auto">
                <label htmlFor="password" className="text-sm font-koho text-white mb-1">Re-enter Password</label>
                <div className="bg-white h-auto rounded-md border-primary-green">
                  <input value={repassword} onChange={(e) => setRePassword(e.target.value)} id="password" className="h-12 w-96 bg-transparent outline-none text-lg p-2" type="password" placeholder="********"/>
                </div>
              </div>
          </div>
          <div className="flex items-center m-auto mt-2 text-base font-koho mb-2 text-white cursor-pointer"><span>Forgot your password? Click here!</span></div>
          <div className="flex gap-7 m-auto">
              <button onClick={handleSubmit} className="flex justify-center items-center w-56 h-16 text-primary-green text-2xl bg-white cursor-pointer rounded-3xl font-koho font-bold">Sign Up</button>
          </div>
          { error && (
            <div className='bg-red-500 text-white w-fit text-md py-1 px-3 rounded-md mt-2 self-center'>
              {error}
            </div>
          )}
        </div>

        <Link href="login" className="mx-auto pt-2">
        <span className='text-xl font-koho font-semibold text-primary-green text-center mt-4'>Already have an account?</span>
        </Link>
        <button></button>
    </div>
    
  );
};

export default SignUp;