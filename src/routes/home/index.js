
"use strict";

const express = require("express");

const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
 
 router.get("/login",ctrl.login);

 module.exports = router    // 외부에서 사용을 할 수 있도록 던져준다.. 