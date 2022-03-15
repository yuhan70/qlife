
"use strict";

const express = require("express");

const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login",ctrl.output.login);
router.post("/login",ctrl.process.login);

 module.exports = router    // 외부에서 사용을 할 수 있도록 던져준다.. 