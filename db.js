const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "queeny",
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
})

module.exports = connection;