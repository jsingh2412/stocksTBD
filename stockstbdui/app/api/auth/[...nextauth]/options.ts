import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers";
import { GoogleProfile } from "next-auth/providers/google";
//CredentialsProvider({
//            name: "Sign In"
//        })
export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    callbacks: {
        async jwt({token, user}){
            if (user) token.role = user.role
            return token
        },
        async session ({session,token}){
            if (session?.user) session.user.role = token.role
            return session
        },
    },
    pages: {
        signIn: "/dashboard",
        newUser: "/profile",
        signOut:"/",
    }
}