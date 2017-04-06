$(function() {
	//拿到删除按钮
	$('.del').click(function(e) {
		var target = $(e.target);
		var id = target.data('id');
		var tr = $('.item-id-' + id);

		$.ajax({
			type: 'DELETE',//请求类型
			url: '/admin/list?id=' + id //请求地址
		})
		.done(function(results) {
			if(results.success === 1) {
				if(tr.length > 0){
					tr.remove();
				}
			}
		})
	})
}) 