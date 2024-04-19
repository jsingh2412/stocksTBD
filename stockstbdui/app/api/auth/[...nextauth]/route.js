/*
* route.js
* Jagroop Singh
* Date Created: 3/28/2024
* The handling of everything related to next-auth all starts here.
* We state the options that will be used to sign in and their corresponding providers 
* along with some functions that are used as helpers on other pages.
*
* Date Changed: 3/31/2024
* The addition of credentials handling with the CredentialsProvider and MongoDB.
* Date Changed: 4/19/2024
* Added the encryption of password along with assuring the safety of our queries.
*/
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@backend/server/db/mongodb";
// Due to the order in which the nextauth route is loaded compared to the user model this can error when first starting the 
// website because the backend has not had the time to run its models file and this prevents that runtime error from occuring
// while insuring User is imported properly. 
let User;
try {
  User = require("@backend/server/models/user").default;
} catch (err) {
  console.error("Error importing User model:", err);
}
const bcrypt = require('bcrypt');

const options = {
    providers: [
        //This states the required information the GoogleProvider needs to connect to our google dashboard.
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials){
                const {email, password} = credentials;
                //sql injection is not possible with the way in which this is written.
                try {
                    await connectMongoDB();
                    //looks for the user by matching by email
                    const user = await User.findOne({email});
                    //checks if the user is found
                    if(!user) {
                        return null;
                    }
                    //ensures that the provided password matches with password associated with the found user
                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if(!passwordsMatch){
                        return null;
                    }
                    return user;
                } catch{

                }

            }
        })
    ],
    session:{
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session ({session,token}){
            if (session?.user) session.user.role = token.role
            return session
        },
        async signIn ({ user, account }) {
            //console.log("User: ", user);
            //console.log("Account: ", account);

            //adds the user to the database when a user signs in with GoogleOAuth
            if(account.provider === "google"){
                const {name, email} = user;
                try {
                    await connectMongoDB();
                    const userExists = await User.findOne({email});
                    // If the user doesn't exist we add a new user to the the database
                    // due to the encryption we use, the user can never possible sign in 
                    // using GOOGLEOAUTH since it will not match with the encrypted password it is using
                    if(!userExists) {
                        const res = await fetch("http://localhost:3000/api/user", {
                        method: "POST",
                        headers: { 
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name,
                            email,
                            password: "GOOGLEOAUTH",
                        })
                        });

                        if(res.ok) {
                            return user;
                        }
                    }
                } catch(error) {
                    console.log(error);
                }
            }

            return user;
        },
    },
    pages: {
        signIn: "/dashboard",
        newUser: "/profile",
        signOut:"/",
    }
};

const handler = NextAuth(options);

export {handler as GET, handler as POST};