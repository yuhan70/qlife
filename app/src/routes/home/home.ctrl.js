"use strict";

const User = require("../../models/User");
const logger = require("../../config/logger");
//const UserStorage = require("../../models/UserStorage");

const output ={
    home: (req, res) => {
        res.render("home/index");
        logger.info(`GET / 200 "홈 화면으로 이동"`);
    },
    login : (req, res) => {
        logger.info(`GET /login 200 "로그인 화면으로 이동"`);
        res.render("home/login");
    },

    register :(req, res) => {
        logger.info(`GET /register 200 "회원가입 화면으로 이동"`);
        res.render("home/register");
    }
};


const process ={
    login: async(req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        if(response.err)
            logger.info(`POST /login 200 Response: " success: ${response.success}, msg: ${response.err}"`);
        else 
            logger.info(`POST /login 200 Response: " success: ${response.success}, msg: ${response.msg}"`);
                //console.log(response);
        return res.json(response);                    
     },

     register:async(req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if(response.err)
            logger.info(`POST /register 200 Response: " success: ${response.success}, msg: ${response.err}"`);
        else
        logger.info(`POST /register 200 Response: " success: ${response.success}, msg: ${response.msg}"`);
        //console.log(response);
        return res.json(response); 
     }
}; 



module.exports ={     // // 외부에서 사용을 할 수 있도록 던져준다.. 
    output,
    process,
};