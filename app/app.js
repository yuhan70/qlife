"use strict";

const express =require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");   // 상대적인 위치로 만들어 주는 역할

// 앱 세팅
app.set("views","./src/views");
app.set("view engine", "ejs"); 

app.use("/", home);                        // use -> 미들 웨어를 등록해주는 메서드.
app.use(express.static(`${__dirname}/src/public`));  // 자바스크립드와 html 이 서로 동작하게..
                                                     // 위치 경로를 정적으로 변환해 준다.

module.exports = app;
