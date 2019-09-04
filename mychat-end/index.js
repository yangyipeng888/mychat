const router = require("./routes/index");
var Koa = require('koa');
const cors = require("koa2-cors");
var bodyParser = require('koa-bodyparser');
const { query } = require("./utils/db");
var app = new Koa();
const server = require("http").createServer(app.callback());
let port = 8888;
server.listen(port);
app.use(cors());
app.use(bodyParser());
// app.use(async ctx => {
//     // the parsed body will store in ctx.request.body
//     // if nothing was parsed, body will be an empty object {}
//     ctx.body = ctx.request.body;
// });
app.use(router.routes()).use(router.allowedMethods());


const io = require("socket.io")(server);
io.on('connection', function(socket){
    const socketId = socket.id;
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('sendMsg', function(msg){
        console.log('message: ' + msg+' socket id:'+socketId);
        socket.broadcast.emit('getMsg', msg);
    });
});

console.log('server goooo in ' + port)

