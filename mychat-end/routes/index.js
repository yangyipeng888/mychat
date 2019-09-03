const router = require('koa-router')(),
	baseApi = require('../config').baseApi,
	login = require('../controllers/login');
router.prefix(`/${baseApi}`)
router.post('/login', login,(ctx)=>{
	console.log("login controller1")
}) //登录




console.log("router");

module.exports = router