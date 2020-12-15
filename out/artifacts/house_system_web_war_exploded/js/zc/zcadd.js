$(function(){
	//init();
	//数据验证
	//checkItem();
	//提交表单位
	commitItem();
});

/******************************提交表单********************************/
function commitItem()
{
	$(".btn").bind("click",function(){
		
	var ctitle = $(".dfinput").val();
	//var t =document.getElementById("content7").value;
	//alert(t);
	var cremark  = $(".contentBody").val();
	

	if(ctitle.length==0)
		{
		   layer.tips('标题不能为空！','#ctitle',{tips:[2,'red']});
		   $(".dfinput").focus();
		   return false;
		}
	else if(cremark.length==0)
		{
		   layer.tips('内容不能为空！','#content7',{tips:[2,'red']});
		   $(".contentBody").focus();
		   return false;
		}
	
	else
		{
		   var mypart = "zc.ctitle=" + ctitle + "&zc.remark=" + cremark+ "&methodName=add";
		   var i = layer.load(0);
			$.post(baseUrl + '/myzc',mypart,function (mydata) {
				layer.close(i);
				if (mydata == 1){
					layer.msg('增加成功!!',{icon:1});
					// var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
					window.location.href = webBaseUrl + "zc/all.html";
				}else {
					parent.layer.msg('增加失败', 2, 9);
				}

			},'json')
		}
	});
}