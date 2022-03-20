"use strict";

const UserStorage = require("./UserStorage");
class User {
    constructor(body){
        this.body = body;
    }
    async login(){
        const client = this.body;
        try{
            const {id, psword} = await UserStorage.getUsersInfo(client.id);        
            //console.log(await UserStorage.getUsersInfo(client.id)); 
            if(id){
                if(id === client.id && psword === client.psword){
                    return { success: true};
                }
                return {success:false, msg:"비밀번호가 틀렸습니다."}   
                     
            }
            return {success:false, msg:"존재하지 않는 아이디입니다."}
        }
        catch(err){
            return {success :false, msg:err};
        }

    }
    async register(){
        const client = this.body;

        try{
            const response = await UserStorage.save(client);
            
            console.log(response);
            return response;
        }
        catch(err){
            //console.error(err);
            return {success :false, msg:err};

        }

    }
}

module.exports = User;