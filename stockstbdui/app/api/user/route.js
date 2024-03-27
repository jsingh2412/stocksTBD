import { connectMongoDB } from "@/backend/server/db/mongodb";
import User from "@/backend/server/models/user";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name, email, password} = await request.json();
    await connectMongoDB();
    await User.create({name, email, password});
    return NextResponse.json({message:"User Registered"}, {status: 201});
}
