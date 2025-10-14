const db = require('../db.js');

const user = {
    add : (data, callback)=>{
        const sql = "INSERT INTO users (firstname, lastname, email, birthdate, gender, password) VALUES (?,?,?,?,?,?)";
        db.query(sql, [data.firstname, data.lastname, data.email, data.birthdate, data.gender, data.password], callback);
    },
    login: (data, callback)=>{
        const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
        db.query(sql, [data.email, data.password], callback);
    }
}

module.exports = user;