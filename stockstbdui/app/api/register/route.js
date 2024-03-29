import {NextResponse} from "next/server"
import { connectMongoDB } from "@/backend/server/db/mongodb";
import User from "@/backend/server/models/user";
import bcrypt from "bcrypt";

export async function POST(req) {
    try {
        const {name, email, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();
        await User.create({name, email, password: hashedPassword})

        return NextResponse.json({message: "User registered."}, {status: 201});
    } catch {
        return NextResponse.json({message: "Failed to register user."}, {status: 500});
    }
}