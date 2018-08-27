const express = require('express');
const router = express.Router();
const Captch = require("../services/captcha.js");

// 生成验证码
// http://localhost:3000/captcha/gencode
router.get('/gencode', Captch.genCaptcha);

// 校验验证码
// http://localhost:3000/captcha/verify?code=xxxx
router.get("/verify", Captch.verifyCaptcha);

module.exports = router;
