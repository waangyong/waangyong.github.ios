/*首页学院概况JS开始*/
//y=true;
//document.getElementById('text_img').onclick=function(){
//	if(y) {
//		y = false;
//		$('#text_p').removeClass('textarea');
//	} else {
//		y = true;
//		$('#text_p').addClass('textarea');
//	}
//};
$(function(){
	//alert("122");
	var img_flag=true;
	$("#SchoolProfile_imgBtn").click(function () {
        //alert("122");
		if(img_flag){
            img_flag=!img_flag;
			$('.SchoolProfile_text').removeClass("SchoolProfile_text_hidden");
		}else{
            img_flag=!img_flag;
            $('.SchoolProfile_text').addClass("SchoolProfile_text_hidden");
		}
    });

	/*var SchoolProfilep1=$(".SchoolProfile .row .col-md-8 .news_left p");
	//console.log(SchoolProfilep);
	$.each(SchoolProfilep1, function() {
		
		if($(this).text().length>24){
			//alert($(this).text().length);
			//alert($(this).text().substr(0,38));
			var str=$(this).children("a").text();
			$(this).children("a").empty().text(str.substr(0,18)+"...");
		}
	});
	var SchoolProfilep2=$(".SchoolProfile .row .col-md-4 .list-group p");
	$.each(SchoolProfilep2, function() {
		
		if($(this).text().length>12){
			//alert($(this).text().length);
			//alert($(this).text().substr(0,38));
			var str=$(this).children("a").text();
			$(this).children("a").empty().text(str.substr(0,9)+"...");
		}
	});*/
});

/*首页学院概况JS结束*/