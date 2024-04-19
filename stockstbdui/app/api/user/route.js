/*
*   route.js
*   Jagroop Singh
*   Date Created: 3/29/2024
*   This api route handles the creation of new users within our database for the 
*   specific case of users authenticated via GoogleOAuth.
*/
import { connectMongoDB } from "@/backend/server/db/mongodb";
import User from "@/backend/server/models/user";
import { NextResponse } from "next/server";

export async function POST(request){
    // We use a unencrypted password to pass into the database here so that no user is able to 
    // sign into another users account using the password GoogleOAuth.
    const {name, email, password} = await request.json();
    await connectMongoDB();
    await User.create({name, email, password});
    return NextResponse.json({message:"User Registered"}, {status: 201});
}
