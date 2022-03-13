"use strict";

const PORT = 7001;

const start = require("../app");

//start.listen(PORT, function(){
    
start.listen(PORT, () => {
    console.log("서버 가동");
});
