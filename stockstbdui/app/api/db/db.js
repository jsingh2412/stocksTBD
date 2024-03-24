import mysql from 'mysql2/promise';

export default async function executeQuery(query, data){
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

export async function checkUser(username, password){
    try{
        const response = await executeQuery("SELECT " + username + " FROM users WHERE password=\"" + password + "\"", []);
    } catch(error){
        throw new Error("No user found.");
    }
}
