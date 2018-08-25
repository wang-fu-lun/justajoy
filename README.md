# 后台管理系统

> 基于 NodeJS + Express + MongoDB 实现的后台管理系统

项目实现前后端分离开发

前端的UI界面放置在 public 目录下

服务器端开发采用三层分层：表示层-业务逻辑层-数据访问层

	public 目录下的内容为表示层
	services 目录下的内容为业务逻辑层
	dao 目录下的内容为数据访问层

服务器刷新：

	nodemon/supervisor

验证码：`svg-captcha`
	
	https://www.npmjs.com/package/svg-captcha

session：`express-session`

	https://www.npmjs.com/package/express-session

数据库连接：`mongoose` - 连接 mongodb数据库

	https://www.npmjs.com/package/mongoose
	https://mongoosejs.com/

数据库连接：`Sequelize` - 连接 PostgreSQL, MySQL, SQLite and MSSQL... 数据库

	http://docs.sequelizejs.com/