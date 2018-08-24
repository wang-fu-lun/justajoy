/**
 * 头部对象构造函数
 */
function Header() {
	this.createDom();
	this.createModal();
}

// 头部导航模板字符串
Header.template = `<div class="container">
	<nav class="navbar navbar-default navbar-inverse">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">拉勾网管理系统</a>
		</div>
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
				<li class="active"><a href="/">首页</a></li>
				<li><a href="/html/position.html">职位管理</a></li>
			</ul>
			<ul class="nav navbar-nav navbar-right not-login">
				<li data-toggle="modal" data-target="#loginModal"><a href="#">登录</a></li>
				<li data-toggle="modal" data-target="#registerModal"><a href="#">注册</a></li>	        
			</ul>
			<ul class="nav navbar-nav navbar-right login-success hide">
				<li><a href="#">你好，xxx</a></li>
				<li><a href="#">注销</a></li>	        
			</ul>
		</div>
	</nav>
</div>`;
/**
 * 原型
 */
$.extend(Header.prototype, {
	// 创建DOM元素并渲染
	createDom() {
		$(Header.template).appendTo("header");
	},
	// 创建模态框
	createModal() {
		new LoginModal();
		new RegisterModal();
	}
});

// 创建头部对象实例
new Header();