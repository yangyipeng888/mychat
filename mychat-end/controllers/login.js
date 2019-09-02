const secret = require("../config").secret;
module.exports = async (ctx, next) => {
	ctx.body = {
		success: true,
		message: "登录成功",
		userInfo: {
			name:123654
		}
	};
	next();
};