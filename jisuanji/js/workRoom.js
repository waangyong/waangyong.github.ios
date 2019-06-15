//获取ul的高
window.onload=function(){
	myimgobj=$(".workRoom-flex >div");
	mydivobj=$('.textbox');
//	alert(myimgobj.length);
	myimgobj.click(function(){
		$(this).addClass('workRoom-flex-active');
		myimgobj.not($(this)).removeClass("workRoom-flex-active");
		mydivobj.eq(parseInt($(this).attr('s'))-1).addClass("action_div");
		mydivobj.not(mydivobj.eq(parseInt($(this).attr('s'))-1)).removeClass("action_div");
//		alert($(this).attr('s'));
	});
	function lifangti(){
		var mywrap=$('.lifangtiWrap');
			var s=0;
			var v=90;
			setobj=setInterval(function(){
				s+=v;
				mywrap.css('transform','rotateY('+s+'deg)');
			},3000);
	}
	lifangti();
//	function workRoomList(){
//		
//		var boxDiv=$('.workRoom-flex');
//		setInterval(function(){
//			var listDiv=$('.workRoom-flex >div');
//			listDiv.eq(0).appendTo(boxDiv);
//		},3000);
//	}
//	workRoomList();
	
	
	function workRoomList(){
		var boxDiv=$('.workRoom-flex');
		var s=0;
		var v=-232;
		var slideLeft=$('.slide-left');
		var slideRight=$('.slide-right');
//		slideLeft.show();
//		slideRight.show();
		var setobj=setInterval(function(){
			s+=v;
			if(s<=-2532){
				s=0;
				boxDiv.css({'marginLeft':s+'px','transition':'0s'});
			}
			else{
				boxDiv.css({'marginLeft':s+'px','transition':'2s'});
			}
		},3000);
		slideLeft.click(function(){
			s+=-232;
			if(s<=-2532){
				s=0;
				boxDiv.css({'marginLeft':s+'px','transition':'0s'});
			}
			else{
				boxDiv.css({'marginLeft':s+'px','transition':'2s'});
			}
		});
		slideRight.click(function(){
			s+=232;
			if(s<=-2532){
				s=0;
				boxDiv.css({'marginLeft':s+'px','transition':'0s'});
			}
			else{
				boxDiv.css({'marginLeft':s+'px','transition':'2s'});
			}
		});
		slideLeft.mouseenter(function(){
			clearInterval(setobj);
		});
		slideLeft.mouseleave(function(){
			setobj=setInterval(function(){
			s+=v;
			if(s<=-2532){
				s=0;
				boxDiv.css({'marginLeft':s+'px','transition':'0s'});
			}
			else{
				boxDiv.css({'marginLeft':s+'px','transition':'2s'});
			}
		},3000);
		});
		slideRight.mouseenter(function(){
			clearInterval(setobj);
		});
		slideRight.mouseleave(function(){
			setobj=setInterval(function(){
			s+=v;
			if(s<=-2532){
				s=0;
				boxDiv.css({'marginLeft':s+'px','transition':'0s'});
			}
			else{
				boxDiv.css({'marginLeft':s+'px','transition':'2s'});
			}
		},3000);
		});
	}
	workRoomList();
}