'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"
import googleLogo from "@public/assets/images/google_logo.png"

export function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google");
    };

    return (
        <button 
        onClick={handleClick}
        className="w-auto flex items-center font-semibold justify-normal h-14 px-6 mt-4 
        text-xl transition-colors duration-300 bg-white border-2 border-primary-green text-primary-green 
        rounded-lg focus:shadow-outline hover:bg-slate-200">
            <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
            <span className="ml-4">Continue with Google</span>
        </button>
    )
}