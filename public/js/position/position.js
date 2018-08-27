function Position() {
	this.addListener();
}

$.extend(Position.prototype, {
	// 注册事件监听 
	addListener() {
		$(".btn-add-pos").on("click", this.addPositionHandler);
	},
	// 添加职位
	addPositionHandler() {
		/*const data = $(".add-position-form").serialize();
		$.post("/positions/add", data, (data)=>{
			console.log(data);
		}, "json");*/

		// 创建 FormData 对象：包装待上传表单的数据
		const formData = new FormData($(".add-position-form").get(0));
		// 使用 $.ajax() 方法
		$.ajax({
			type: "post",
			url: "/positions/add",
			data: formData,
			processData: false, // 禁止将 data 转换为查询字符串
			contentType: false, // 不设置contentType
			success: function(data){
				console.log(data);
			},
			dataType: "json"
		})
	}
});

new Position();