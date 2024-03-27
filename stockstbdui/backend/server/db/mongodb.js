import mongoose from "mongoose";

export const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("CONNECTED TO MONGO!");
    } catch (error){
        console.log("ERROR connecting to database: ", error);
    }
}