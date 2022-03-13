"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"), 
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){
    //console.log("bye");
    console.log(id.value);
    const req ={
        id: id.value,
        psword: psword.value,
    };
    //console.log(req);
    //console.log(JSON.stringify(req)); 
    console.log(req, JSON.stringify(req));
    /*fetch("/login",{
        body : JSON.stringify(req)
    }
    )
    */
}