"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"), 
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){
   
    console.log(id.value);
    const req ={
        id: id.value,
        psword: psword.value,
    };
  
    fetch("/login" , {
        method : "POST",     // REST API 의 경우에 
        headers:{
           "Content-Type":"application/json",
        }, 
        body : JSON.stringify(req),
    })
    .then((res) =>res.json())             // 서버에서 응답한 데이터를 받기 위해서 . then 사용
    .then((res) => {
         if(res.success){
             location.href = "/";
         }else{
             alert(res.msg)              // 서버에서 전달한 메시지를 alert으로 보냄.
         }           
    }  )
   .catch((err)=>{
      // console.error(new Error("로그인 중 에러 발생"));
      console.error("로그인 중 에러 발생");
   });
    
     
}