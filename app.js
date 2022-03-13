"use strict";

const express =require("express");
const app = express();

// 라우팅
const home = require("./routes/home");   // 상대적인 위치로 만들어 주는 역할

// 앱 세팅
app.set("views","./views");
app.set("view engine", "ejs"); 

app.use("/", home);                        // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;
