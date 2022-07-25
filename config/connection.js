import 'dotenv/config';
import mysql from 'mysql2';

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: process.env.DB_USER,
      // MySQL password
      password: process.env.DB_PW,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the database.`)
  );

export default db;