const { Pool } = require('pg');

let connection;

function createConnection() {
    connection = new Pool({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "queeny_p1tf",
        port: process.env.DB_PORT || 5432,
        ssl: {
            rejectUnauthorized: false
        },
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
    });

    // Test the connection
    connection.query('SELECT NOW()', (err, result) => {
        if(err){
            console.error('Database connection failed:', err);
            console.error('DB_HOST:', process.env.DB_HOST);
            console.error('DB_USER:', process.env.DB_USER);
            console.error('DB_NAME:', process.env.DB_NAME);
            return;
        }
        console.log("Database connected successfully");
    });

    connection.on('error', function(err) {
        console.error('Database error:', err);
        if(err.code === 'ECONNRESET' || err.code === 'ENOTFOUND') {
            console.log('Reconnecting to database...');
            createConnection();
        } else {
            throw err;
        }
    });
}

createConnection();

module.exports = connection;