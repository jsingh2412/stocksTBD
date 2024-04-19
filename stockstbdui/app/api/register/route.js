/*
*   route.js
*   Jagroop Singh
*   Date Created: 3/29/2024
*   This api route handles the creation of new users within our database.
*
*   Date Changed: 4/19/2024
*   Added the encryption of password along with assuring the safety of our queries.
*/
import {NextResponse} from "next/server"
import { connectMongoDB } from "@/backend/server/db/mongodb";
import User from "@/backend/server/models/user";
import bcrypt from "bcrypt";

export async function POST(req) {
    try {
        const {name, email, password} = await req.json();
        // encrypt our password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        await connectMongoDB();
        // create the user in our database
        await User.create({name, email, password:hashedPassword})
        return NextResponse.json({message: "User registered."}, {status: 201});
    } catch {
        return NextResponse.json({message: "Failed to register user."}, {status: 500});
    }
}