"use strict";

const start = require("../app");
const logger = require("../src/config/logger");

const PORT = process.env.PORT || 7001;

//start.listen(PORT, function(){
    
start.listen(PORT, () => {
    //console.log({PORT});
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.` );
});
