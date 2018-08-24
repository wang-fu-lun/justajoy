/**
 * 登录模态框
 */
function LoginModal() {
	this.createDom();
	this.addListener();
}

// 登录模态框的模板字符串
LoginModal.template = `
<div class="modal fade" id="loginModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
        <h4 class="modal-title">用户登录</h4>
      </div>
			<div class="modal-body">
				<form class="login-form">
					<div class="form-group">
						<label for="exampleInputEmail1">用户名</label>
						<input type="email" class="form-control" name="username" id="loginUsername" placeholder="用户名">
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">密码</label>
						<input type="password" class="form-control" name="password" id="loginPassword" placeholder="密码">
					</div>
					<div class="form-group">
						<label for="exampleInputFile">验证码</label>
						<input type="text" class="form-control" id="loginCode" placeholder="验证码">
						<p class="help-block">这是个验证码图片</p>
					</div>
				</form>
			</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary">登录</button>
      </div>
    </div>
  </div>
</div>
`;

/**
 * 原型
 */
$.extend(LoginModal.prototype, {
	// 创建DOM元素并渲染
	createDom() {
		$(LoginModal.template).appendTo("body");
	},
	// 注册事件监听
	addListener() {
		$(".btn-login").on("click", this.loginHandler)
	},
	// 登录业务处理
	loginHandler() {
		// 待传递到服务器的用户登录数据
		var data = $(".login-form").serialize();
		// ajax提交登录处理
		$.post("/users/login", data, (resData)=>{
			console.log(resData);
		}).done(()=>{
			$("#loginModal").modal("hide");
		}).done(()=>{
			$(".login-success").removeClass("hide").siblings(".not-login").remove();
		});
	}
});