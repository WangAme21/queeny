const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "queeny"
});

connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Database connected");
})

module.exports = connection;