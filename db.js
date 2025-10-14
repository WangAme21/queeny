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
        throw err;
    }
    console.log("Database connected");
})

module.exports = connection;