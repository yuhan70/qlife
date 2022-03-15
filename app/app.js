"use strict";

const express =require("express");
const bodyParser = require("body-parser");  // 사용을 할 때에 미들웨어를 등록을 해주어애 한다.


const app = express();

// 라우팅
const home = require("./src/routes/home");   // 상대적인 위치로 만들어 주는 역할

// 앱 세팅
app.set("views","./src/views");
app.set("view engine", "ejs"); 

                      
app.use(express.static(`${__dirname}/src/public`));  
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.json());
app.use("/", home); 
module.exports = app;
