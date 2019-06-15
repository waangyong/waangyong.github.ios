$(document).ready(function () {
     var arrt=["p1","p2","p3","p4","p5","p6","p7","p8","p9"];
     var liobj=$('#lunbo>li');
     var setobj=setInterval(function () {
         LeftImg(arrt);
     },3000);
	    function LeftImg(arrt) {
         var liobj=$('#lunbo>li');
             arrt.unshift(arrt[8]);
             arrt.pop();

                console.info(liobj.eq(4).children('p'));
                liobj.eq(2).children('p').addClass('turn-photo-active');
                liobj.eq(2).children('p').siblings().removeClass('turn-photo-active');
             liobj.each(function (i,e) {
                 $(e).removeClass().addClass(arrt[i]);
             });
                $('#turnUL .p3 p').addClass('turn-photo-active');
         $('#lunbo li p').each(function (i,e) {
             $(e).removeClass('turn-photo-active');
         });
         $('#between .ul_center p').addClass('turn-photo-active');
     }
     function RightImg(arrt) {
         var liobj=$('#lunbo>li');
             arrt.push(arrt[0]);
             arrt.shift();
             liobj.each(function (i,e) {
                 $(e).removeClass().addClass(arrt[i]);
             });
         $('#lunbo li p').each(function (i,e) {
             $(e).removeClass('turn-photo-active');
         });
         $('#lunbo .p5 p')
         .addClass('turn-photo-active');
     }
     var leftbtn=$(".between .between_left");
	    leftbtn.click(function () {
         LeftImg(arrt);
     });
     var rightbtn=$(".between .between_right");
     rightbtn.click(function () {
         RightImg(arrt);
     });
     leftbtn.mouseenter(function () {
         if(setobj!=null){
             clearInterval(setobj);
         }
     });
     leftbtn.mouseleave(function () {
         setobj=setInterval(function () {
             LeftImg(arrt);
         },3000);
     });
     rightbtn.mouseenter(function () {
         if(setobj!=null){
             clearInterval(setobj);
         }
     });
     rightbtn.mouseleave(function () {
         setobj=setInterval(function () {
             LeftImg(arrt);
         },3000);
     });
 });



//
// $(function(){
//
// 	var i=0;
// 	var clone=$(".banner_lunbo .img li") .first() .clone();
// 	$(".banner_lunbo .img") .append(clone);
//
// 	var size=$(".banner_lunbo .img li").size()
//	console.log(size);
// 	for(var j=0;j<size-2;j++){
// 		$(".banner_lunbo .num").append("<li></li>")
// 	}
//
// 	$(".banner_lunbo .num li") .first() .addClass("on")
//
	//鼠标滑入圆点元素
	// $(".banner_lunbo .num li").hover(function(){
	// 	var index=$(this).index();
	// 	i=index;
	// 	$(".banner_lunbo .img").stop()
	// 	.animate({left:-index*584},584)
	// 	$(this) .addClass("on") .siblings() .removeClass("on")
	// })
	//
	//自动轮播   定时器
	// var t=setInterval(moveL,2000)
	
	
	//对banner定时器的操作 鼠标移入时关闭定时器
	// $(".banner_lunbo").hover(function(){
	// 	clearInterval(t);
	// },function(){
	//
	// 	t=setInterval(moveL,2000)
	// })
	
	
//	向左的按钮
// 	$(".banner_lunbo .btn_l") .click(function(){
// 		moveL()
// 	})
//
	
	
//	向右的按钮
// 	$(".banner_lunbo .btn_r") .click(function(){
// 		moveR()
//
// 	})
//
	
// 	function moveL(){
// 		i++
// 		if(i==size){
// 			$(".banner_lunbo .img") .css({left:0})
// 			i=1;
// 		}
// 		$(".banner_lunbo .img").stop()
// 		.animate({left:-i*584},584)
//
// 		if(i==size-1){
// 			$(".banner_lunbo .num li") .eq(0) .addClass("on") .siblings() .removeClass("on")
// 		}
// 		else{
//
// 		$(".banner_lunbo .num li") .eq(i) .addClass("on") .siblings() .removeClass("on")
// 		}
// 	}
//
//
// 	function moveR(){
// 		i--
// 		if(i==-1){
// 			$(".banner_lunbo .img").css({left:-(size-1)*584})
// 			i=size-2;
// 		}
// 		$(".banner_lunbo .img").stop()
// 		.animate({left:-i*584},584)
//
//
//
//
//
// 		$(".banner_lunbo .num li") .eq(i) .addClass("on") .siblings() .removeClass("on")
// 	}
// })







function shoeHide1()
{
	var  oDiv= document.getElementById('blocknone');
	if( oDiv.style.display=='block')
	{
		oDiv.style.display='none'
	}
	else
	{
		oDiv.style.display='block'
	}
}
function shoeHide2()
{
	var  oDiv= document.getElementById('noneblock');
	if( oDiv.style.display=='block')
	{
		oDiv.style.display='none'
	}
	else
	{
		oDiv.style.display='block'
	}
}
