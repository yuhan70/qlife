"use strict";

const User = require("../../models/User");
//const UserStorage = require("../../models/UserStorage");

const output ={
    home: (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },

    register :(req, res) => {
        res.render("home/register");
    }
};


const process ={
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        //console.log(response);
        return res.json(response);                    
     },

     register:(req, res) => {
        const user = new User(req.body);
        const response = user.register();
        //console.log(response);
        return res.json(response); 
     }
}; 



module.exports ={     // // 외부에서 사용을 할 수 있도록 던져준다.. 
    output,
    process,
};