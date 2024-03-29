import { connectMongoDB } from "@/backend/server/db/mongodb";
import tickerPrediction from "@/backend/server/models/tickerPrediction";
import { NextResponse } from "next/server";

export async function POST(request){
    const {ticker, company, sector, image, price, prediction, lookup} = await request.json();
    await connectMongoDB();
    await tickerPrediction.create({ticker, company, sector, image, price, prediction, lookup});
    return NextResponse.json({message:"tickerPrediction works maybe idk"}, {status: 201});
}