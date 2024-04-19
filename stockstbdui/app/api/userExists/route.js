/*
*   route.js
*   Jagroop Singh
*   Date Created: 3/29/2024
*   This api route takes a provided email and looks for a user that has the same email
*   as the one provided and returns the user if it is found.
*/
import { connectMongoDB } from "@backend/server/db/mongodb";
import User from "@/backend/server/models/user";
import {NextResponse} from "next/server"

export async function POST(req) {
    try{
        await connectMongoDB();
        const {email} = await req.json();
        // looks for a row in the database that has a matching email
        const user = await User.findOne({email}).select("_id");
        return NextResponse.json({ user });
    } catch ( error){
        console.log(error);
    }
}