const router = require('koa-router')(),
    baseApi = require('../config').baseApi,
    login = require('../controllers/login'),
    register = require('../controllers/register');

router.prefix(`/${baseApi}`)
//登录
// router.post('/login', login,(ctx)=>{
// 	console.log("login controller1")
// })
router.post('/login', login) //登录
router.post('/register', register) //登录


console.log("router");

module.exports = router