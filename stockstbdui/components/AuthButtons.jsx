'use client'
/*
/   This is a set of authentication buttons to help with the login page.
/   This will be used for oAuth authentication, where we need to redirect the user.
*/
import { signIn } from "next-auth/react"
import Image from "next/image"
import googleLogo from "@public/assets/images/google_logo.png"

// The google button uses the pre-existing signIn from next-auth and redirects users
// to the dashboard if they successfully login
export function GoogleSignInButton() {
    //redirects to Google oAuth login
    const handleClick = () => {
        signIn("google", {callbackUrl: "/dashboard"});
    };

    return (
        <button 
        onClick={handleClick}
        className="w-9/12 flex items-center font-semibold justify-center h-14 px-6 mt-4 
        text-xl transition-colors duration-300 bg-white border-2 border-primary-green text-primary-green 
        rounded-lg outline-black outline-1 focus:shadow-outline hover:bg-slate-200">
            <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
            <span className="ml-4">Continue with Google</span>
        </button>
    );
};