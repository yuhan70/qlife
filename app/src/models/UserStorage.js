"use strict";


const db = require("../config/db");


class UserStorage{
    
    static getUsers(isAll,...fields){
        
      
       
    }

    static getUsersInfo(id){  
        return new Promise((resolve,reject)=> {      // mysql 의 경우에 Promise 을 지원하지 않아서 직적 프로그램을 해주어야 함.
            const query ="select * from users where id =?;";

            db.query(query,[id], (err, data)=>{            
                if(err) reject(`${err}`);
                console.log(data[0]); 
                resolve(data[0]);
            });
        });     
       
    } 

    static async save(userInfo){
        return new Promise((resolve,reject)=> {      // mysql 의 경우에 Promise 을 지원하지 않아서 직적 프로그램을 해주어야 함.
            const query ="insert into users(id, name, psword) values(?,?,?);";

            db.query(
                query,
                [userInfo.id, userInfo.name, userInfo.psword],
                (err)=>{            
                    if(err) reject(`${err}`);                    
                    resolve({success : true});
                });
            });     

    }


}

module.exports = UserStorage;