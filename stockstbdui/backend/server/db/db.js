import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
// generic execute query function that will be used by every other function
// creates a connection to the database and executes the inputted query and returns the result.
export async function executeQuery(query, data){
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: 'stockstbd',
        });
        const [result] = await db.execute(query, data);
        await db.end();
        return result;
    } catch (error){
        console.log(error);
        return null;
    }
}
// takes the inputed username and password, using the helper function to help with the security of our software
// passwords will be hashed and usernames will be sanitized.
export async function checkUser(username, password){
    try{
        const query = "SELECT COUNT(*) AS count FROM users WHERE username = ? AND password = ?";
        const [result] = await executeQuery(query, [sanitizeUsername(username), hashPassword(password)]);
        return result.count > 0;
    } catch(error){
        throw new Error("No user found.");
    }
}

async function hashPassword(plaintext){
    const salt = await bcrypt.genSalt();
    const hashedPasswd = await bcrypt.hash(plaintext, salt);
    return hashedPasswd;
}

async function sanitizeUsername(username){
    const sanitizedUsername = username.replace(/[^a-zA-Z0-9]/g, '').trim()
    return (sanitizedUsername.toLowerCase());
}