const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./db.js');
const router = require('./routes/router.js');

// Auto-create users table if it doesn't exist
const createUsersTable = async () => {
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
        await db.query(sql);
        console.log('✅ Users table created successfully!');
    } catch (err) {
        console.error('❌ Error creating users table:', err);
    }
};

// Create table on startup
createUsersTable();

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));
app.use("/", router);

app.get("/", (req, res)=>{
    res.render("index");
})

app.listen(port, ()=>{
    console.log("listening at port %d", port);
})