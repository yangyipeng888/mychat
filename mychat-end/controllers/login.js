const secret = require("../config").secret;
const userModel = require("../models/user_info");

module.exports = async (ctx, next) => {

    let name = ctx.request.body.name || "",
        password = ctx.request.body.password || "";
    if (name === "" || password === "") {
        ctx.body = {
            success: false,
            message: "用户名或密码不能为空"
        };
        return;
    }
    const RowDataPacket = await userModel.findDataByName(name);
    const res = JSON.parse(JSON.stringify(RowDataPacket));
    if (res.length > 0) {
        //   验证成功后，服务端会签发一个 Token，再把这个 Token 发送给客户端
        if (password === res[0]["password"]) {
            ctx.body = {
                success: true,
                message: "登录成功",
                userInfo: {
                    name: res[0]["name"],
                }
            };
        } else {
            ctx.body = {
                success: false,
                message: "密码错误"
            };
        }
    } else {
        ctx.body = {
            success: false,
            message: "用户名错误"
        };
    }
    next();
};