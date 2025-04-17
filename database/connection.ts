import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

let connection: mysql.Connection | null = null;

export async function connect() {
  if (connection) return connection;

  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  console.log('conectado ao banco de dados');
  return connection;
}
