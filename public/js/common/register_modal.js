function RegisterModal() {
	this.createDom();
}

// 注册模态框的模板字符串
RegisterModal.template = `
<div class="modal fade" id="registerModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
        <h4 class="modal-title">用户注册</h4>
      </div>
			<div class="modal-body">
				<form class="login-form">
					<div class="form-group">
						<label for="registerUsername">用户名</label>
						<input type="text" class="form-control" id="registerUsername" placeholder="用户名">
					</div>
					<div class="form-group">
						<label for="registerPassword">密码</label>
						<input type="password" class="form-control" id="registerPassword" placeholder="密码">
					</div>
					<div class="form-group">
						<label for="registerConfPassword">确认密码</label>
						<input type="password" class="form-control" id="registerConfPassword" placeholder="确认密码">
					</div>
					<div class="form-group">
						<label for="registerEmail">Email</label>
						<input type="email" class="form-control" id="registerEmail" placeholder="Email">
					</div>
					<div class="form-group">
						<label for="registerCode">验证码</label>
						<input type="text" class="form-control" id="registerCode" placeholder="验证码">
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

$.extend(RegisterModal.prototype, {
	createDom() {
		$(RegisterModal.template).appendTo("body");
	}
})