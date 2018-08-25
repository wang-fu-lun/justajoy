const {User} = require("./model.js");

const UserDao = {
	save(userinfo) {
		const user = new User(userinfo);
		return user.save(); // 返回Promise对象
	},
	find() {},
	update() {},
	delete() {}
};

module.exports = UserDao;