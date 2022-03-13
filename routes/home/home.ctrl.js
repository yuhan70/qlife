"use strict";

const home = (req, res) => {
    res.render("home/index");
 };

 const login = (req, res)=>{
    res.render("home/login")
};

module.exports ={     // // 외부에서 사용을 할 수 있도록 던져준다.. 
    home,
    login,
}