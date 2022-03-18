"use strict";

class UserStorage{
    
    static #users = {                               // 은닉화  #
    id: ["yuhan", "test", "test2"],
    psword: ["1234","1234","12345"],
    name : ["유한", "나개발","정이사"],
    };

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

    static getUsersInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);

        console.log(users);
        return{success : true};

    }


}

module.exports = UserStorage;