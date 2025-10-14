const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController.js');

router.post("/addUser", controller.addUser);
router.post("/loginUser", controller.loginUser);

router.get("/register", (req, res)=>{
    res.render("register");
})

router.get("/logout", (req, res)=>{
    res.render("index");
})


module.exports = router;