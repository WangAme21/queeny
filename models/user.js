const db = require('../db.js');

const user = {
    add : (data, callback)=>{
        const sql = "INSERT INTO users (firstname, lastname, email, birthdate, gender, password) VALUES ($1, $2, $3, $4, $5, $6)";
        db.query(sql, [data.firstname, data.lastname, data.email, data.birthdate, data.gender, data.password], (err, results) => {
            if(err) {
                console.error('Database query error:', err);
                return callback(err);
            }
            callback(null, results);
        });
    },
    login: (data, callback)=>{
        const sql = "SELECT * FROM users WHERE email = $1 AND password = $2";
        db.query(sql, [data.email, data.password], (err, results) => {
            if(err) {
                console.error('Database query error:', err);
                return callback(err);
            }
            callback(null, results.rows);
        });
    }
}

module.exports = user;