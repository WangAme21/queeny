const mysql = require('mysql');

let connection;

function createConnection() {
    connection = mysql.createConnection({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "queeny_p1tf",
        port: process.env.DB_PORT || 3306,
        acquireTimeout: 60000,
        timeout: 60000,
        reconnect: true
    });

    connection.connect((err)=>{
        if(err){
            console.error('Database connection failed:', err);
            console.error('DB_HOST:', process.env.DB_HOST);
            console.error('DB_USER:', process.env.DB_USER);
            console.error('DB_NAME:', process.env.DB_NAME);
            return;
        }
        console.log("Database connected");
    });

    connection.on('error', function(err) {
        console.error('Database error:', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Reconnecting to database...');
            createConnection();
        } else {
            throw err;
        }
    });
}

createConnection();

module.exports = connection;