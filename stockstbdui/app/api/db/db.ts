import mysql from 'mysql2/promise';

export default async function handler() {
    const dbconnection = await mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        database: 'stockstbd',
    });
    
}