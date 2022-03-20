"use strict";

const express =require("express");
const bodyParser = require("body-parser");  // 사용을 할 때에 미들웨어를 등록을 해주어애 한다.
const dotenv = require("dotenv");
const morgan = require("morgan");
const logger = require("./src/config/logger");


const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home");   // 상대적인 위치로 만들어 주는 역할

const accessLogStream = require("./src/config/log");

//const logger = require("./src/config/logger");
//logger.log("info", "Hello yuhan");

// 앱 세팅
app.set("views","./src/views");
app.set("view engine", "ejs"); 

                      
app.use(express.static(`${__dirname}/src/public`));  
app.use(bodyParser.json());
//app.use(morgan(':method :date[web]',{stream:accessLogStream}));
//app.use(morgan('common',{stream:accessLogStream}));
app.use(morgan('tiny',{stream: logger.stream}));


app.use("/", home); 
module.exports = app;
