// 引入 mongoose
const mongoose = require("mongoose");
// 连接数据库
mongoose.connect('mongodb://localhost/justajoy', { useNewUrlParser: true } );

// 用户模型
const User = mongoose.model("user", {
	username: String,
	password: String,
	email: String
});

// 职位模型
const Position = mongoose.model("position", {
	logo: String,
	name: String,
	complyname: String, 
	experience: String, 
	type: String,
	city: String,
	salary: Number
});

module.exports = {User, Position};