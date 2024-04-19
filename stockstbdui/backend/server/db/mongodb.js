/*
*   mongodb.js
*   Jagroop Singh
*   Date Created: 3/27/2024
*   This uses the provided function from mongoose to attempt to create a connection with our MongoDB database.
*/
import mongoose from "mongoose";

export const connectMongoDB = async() => {
    try {
        //attempt to connect to our MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        //console.log("CONNECTED TO MONGO!");
    } catch (error){
        console.log("ERROR connecting to database: ", error);
    }
}