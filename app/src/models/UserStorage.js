"use strict";

class UserStorage{
    
    static #users = {                               // 은닉화  #
    id: ["yuhan", "test", "test2"],
    psword: ["1234","1234","12345"],
    name : ["유한", "나개발","정이사"],
    };

    /*
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            console.log(newUsers,field);
        });
       
        return;
    }
    */
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
        
            return newUsers;
        },{});
       
        return newUsers;
    }
}

module.exports = UserStorage;