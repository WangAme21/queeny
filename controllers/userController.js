const user = require('../models/user.js');

module.exports = {
    addUser : (req, res)=>{
        const { firstname, lastname, email, birthdate, gender, password } = req.body;
        user.add( {firstname, lastname, email, birthdate, gender, password}, ()=>{
            res.redirect("/?success");
        } )
    },
    loginUser: (req, res)=>{
        const { email, password} = req.body;
        user.login({email, password}, (err)=>{
            if(err){
                throw err;
            }
            res.render("dashboard");
        })
    }
}