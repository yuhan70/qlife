const { createLogger, transports ,format} = require("winston");
const {combine, label, timestamp, printf, son, simple, colorize} = format;

//const winston = require("winston");
const printFormat = printf(({ timestamp, label, level, message}) => { 
    return `${timestamp} [ ${label} ] ${level} : ${message}`;
});

const printLogFormat = combine(
    //winston.format.colorize(),
    label({
        label : "백엔드 맛보기"
    }),
    //colorize(),    // file에 저장할 때에는 막아준다.
    timestamp({
        format:"YYYY-MM-DD HH:mm:dd",
    }),
    printFormat
         // 출력 포맷을 결정해줌.
);

const opts ={
    file : new transports.File({
        filename:"access.log",
        dirname:"./logs",
        level:"info", 
        format: printLogFormat            
    }),
    console : new transports.Console({            
        level:"info", 
        format: printLogFormat            
    }),
};
const logger = createLogger({
    transports : [opts.file],

});

if(process.env.NODE_ENV !== "production"){
    logger.add(opts.console);
          
}

module.exports = logger;