// Script to create users table
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "queeny_p1tf",
    port: process.env.DB_PORT || 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

const createTable = async () => {
    try {
        const sql = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                firstname VARCHAR(255) NOT NULL,
                lastname VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                birthdate DATE,
                gender VARCHAR(10),
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        
        await pool.query(sql);
        console.log('✅ Users table created successfully!');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error creating table:', err);
        process.exit(1);
    }
};

createTable();
