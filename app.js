const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./db.js');
const router = require('./routes/router.js');

const app = express();
const port = 3000;

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