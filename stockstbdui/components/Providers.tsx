/*
* Providers.tsx
* Jagroop Singh
* Date Created: 3/9/2024
* This allows the use of sessions throughout the website using the framework provided by next-auth.
*/
"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
//defines the interface and the children within it
interface Props{
    children: ReactNode;
}

const Providers = (props: Props) => {
    // wraps everything provided within the SessionProvider using the function provided by next-auth
    return <SessionProvider>{props.children}</SessionProvider>
};

export default Providers;
