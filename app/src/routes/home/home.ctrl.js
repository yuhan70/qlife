"use strict";

const output ={
    home: (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login")
    },
};

const users = {
    id: ["yuhan", "test", "test2"],
    psword: ["1234","1234","12345"],
};

const process ={
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;
             
        //console.log(id,psword);   // body 를 받아 올 수가 없음.. body-parser 를 설치해야함.
       //console.log("hello");
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success : true,
                })
            }
        }
        return res.json({
            success :false,
            msg: "로그린에 실패하셨습니다."
        })
    },
}; 



module.exports ={     // // 외부에서 사용을 할 수 있도록 던져준다.. 
    output,
    process,
};