import mongoose from "mongoose";

export const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("CONNECTED TO MONGO!");
    } catch (error){
        console.log("ERROR connecting to database: ", error);
    }
}

/*
export async function checkUser(username, password){
    try{
        const query = "SELECT COUNT(*) AS count FROM users WHERE username = ? AND password = ?";
        const [result] = await executeQuery(query, [sanitizeUsername(username), hashPassword(password)]);
        return result.count > 0;
    } catch(error){
        throw new Error("No user found.");
    }
}
*/

async function hashPassword(plaintext){
    const salt = await bcrypt.genSalt();
    const hashedPasswd = await bcrypt.hash(plaintext, salt);
    return hashedPasswd;
}

async function sanitizeUsername(username){
    const sanitizedUsername = username.replace(/[^a-zA-Z0-9]/g, '').trim()
    return (sanitizedUsername.toLowerCase());
}