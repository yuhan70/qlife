"use strict";

const UserStorage = require("./UserStorage");
class User {
    constructor(body){
        this.body = body;
    }
    login(){
        /*
        //const {id, psword} = UserStorage.getUsers("id", "psword");
        const {id, psword} = UserStorage.getUsersInfo(this.body.id);
        //const a = UserStorage.getUsersInfo( "yuhan");
        //console.log(a);
        
        if(id){
            if(id === this.body.id && psword === this.body.psword){
                return { success: true};
            }
            return {success:false, msg:"비밀번호가 틀렸습니다."}   
                     
        }
        return {success:false, msg:"존재하지 않는 아이디입니다."}
        */
        const body = this.body;
        //const {id, psword} = UserStorage.getUsers("id", "psword");
        const {id, psword} = UserStorage.getUsersInfo(body.id);
        //const a = UserStorage.getUsersInfo( "yuhan");
        //console.log(a);
        
        if(id){
            if(id === body.id && psword === body.psword){
                return { success: true};
            }
            return {success:false, msg:"비밀번호가 틀렸습니다."}   
                     
        }
        return {success:false, msg:"존재하지 않는 아이디입니다."}

    }
}

module.exports = User;