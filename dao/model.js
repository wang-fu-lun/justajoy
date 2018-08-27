// 引入 mongoose
const mongoose = require("mongoose");
// 连接数据库
mongoose.connect('mongodb://localhost/proj_1804', { useNewUrlParser: true } );

// 用户模型
const User = mongoose.model("user", {
	username: String,
	password: String,
	email: String
});

// 职位模型
const Position = mongoose.model("position", {
	name: String,
	logo: String,
	salary: Number,
	city: String
});

module.exports = {User, Position};