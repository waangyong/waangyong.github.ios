/*首页头部JS开始*/
//回到首页
$(".t-right-bar").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $(".t-right-bar").fadeIn(500);
            }
            else {
                $(".t-right-bar").fadeOut(500);
            }
        });

        $("#back-to-top").click(function () {
            $('body,html').animate({scrollTop: 0}, 100);
            return false;
        });
  });
window.onload = function ()
{
	var oHome = document.getElementById('home');
	var oSearch = document.getElementById('search');
	var oHomeText = document.getElementById('h_text');
	var oSearchText = document.getElementById('s_text');
	var oReturn = document.getElementById('return');
	var oDrop = document.getElementById('drop');
	var oDropDown = document.getElementById('dropdown');
	var oDropDownMenu = document.getElementById('dropdown-menu');	
	var oKeYan = document.getElementById('keyan');	
	oHome.onmouseover = function()
	{
		oHomeText.style.display = 'block';
	}
	oHome.onmouseout = function()
	{
		oHomeText.style.display = 'none';
	}
	;
	oSearch.onmouseover = function()
	{
		oSearchText.style.display = 'block';
	};
	oSearch.onmouseout = function()
	{
		oSearchText.style.display = 'none';
	};

	oDropDown.onmouseover = function()
	{
		oDropDownMenu.style.display = 'block';
		oDropDown.onmouseout = function(){
		oDropDownMenu.style.display = 'block';
		}
	};

	oKeYan.onmouseover = function()
	{
		oDropDownMenu.style.display = 'none';
	};
	oDrop.onmouseover = function()
	{
		oDropDownMenu.style.display = 'none';
	};
}
/*首页头部JS结束*/


/*首页学院概况JS开始*/
y=true;
document.getElementById('text_img').onclick=function(){
	if(y) {
		y = false;
		$('#text_p').removeClass('textarea');
	} else {
		y = true;
		$('#text_p').addClass('textarea');
	}
};
/*首页学院概况JS结束*/

/*首页层叠式轮播JS开始*/
/*$(document).ready(function(){
	document.getElementById('right_slip1').onclick=function(){
		right_slip();
	};
	document.getElementById('left_slip').onclick=function(){
		left_slip();
	};
	setobj=setInterval(function(){
		left_slip();	
	},3000);

	var img_clickarr=$('#ul_listen img');
	for(var i=0;i<img_clickarr.length;i++){
		img_clickarr.eq(i).click(function(){
			var num=parseInt($(this).parent().attr('s'));
			switch(num){
				case 1: right_slip();right_slip();break;
				case 2: right_slip();break;
				case 3: ;break;
				case 4: left_slip();break;
				case 5: left_slip();left_slip();break;
			}
		});
		img_clickarr.eq(i).mouseenter(function(){
			if(setobj!=null){
				clickimg(setobj);
			}
		});
		img_clickarr.eq(i).mouseleave(function(){
			setobj=setInterval(function(){
				left_slip();	
			},3000);
		});
	}
});
function clickimg(setboj){
	clearInterval(setboj);
}
function obj_addclass(liobj){
	liobj.eq(0).addClass('left_index_1');
	liobj.eq(0).attr('s','1');
	liobj.eq(1).addClass('left_index_2');
	liobj.eq(1).attr('s','2');
	liobj.eq(2).addClass('center_index');
	liobj.eq(2).attr('s','3');
	liobj.eq(3).addClass('right_index_2');
	liobj.eq(3).attr('s','4');
	liobj.eq(4).addClass('right_index_1');
	liobj.eq(4).attr('s','5');
}
function obj_removeclass(liobj){
	liobj.eq(4).removeClass();
	liobj.eq(0).removeClass();
	liobj.eq(1).removeClass();
	liobj.eq(2).removeClass();
	liobj.eq(3).removeClass();
}
function left_slip()
{
	var liobj=$('#ul_listen').children('li');
	obj_addclass(liobj);
	liobj.eq(0).appendTo('#ul_listen');
	var liobj=$('#ul_listen').children('li');
	obj_removeclass(liobj);
	obj_addclass(liobj);
}
function right_slip(){
	var liobj=$('#ul_listen').children('li');
	obj_addclass(liobj);
	liobj.eq(4).prependTo('#ul_listen');
	var liobj=$('#ul_listen').children('li');
	obj_removeclass(liobj);
	obj_addclass(liobj);
}*/
/*首页层叠式轮播JS结束*/

/*首页师资队伍JS开始*/
var carousels = $('.carousel');
carousels.each(function() {
  var $obj = $(this);
  var $inner = $obj.find('.carousel-inner');
  
  var id = 'uuid' + new Date().getTime();
  $obj.addClass(id);

  if ($obj.data('shift') === 1) {
    var items = $obj.find('.item > [class*="col-"]'),
        visibleCnt = $obj.find('.item:first [class*="col-"]').length,
        wrapper = "";
    
    // build styles
    var rule_base = '.carousel.' + id + ' .carousel-inner > .item',
        styles = $('<style></style>'),
        rules = [];
        rules[0] = rule_base + '.next {left: ' + (100 / visibleCnt) + '%; transform: none;}';
        rules[1] = rule_base + '.active {left: 0;}';
        rules[2] = rule_base + '.active.left {left: -' + (100 / visibleCnt) + '%; transform: none;}';
        rules[3] = rule_base + '.next.left {left: 0;}';
        rules[4] = rule_base + '.active.right {left: ' + (100 / visibleCnt) + '%; transform: none;}';
        rules[5] = rule_base + '.prev.right {left: 0;}';
        rules[6] = rule_base + '.prev {left: -' + (100 / visibleCnt) + '%; transform: none;}';
    for (var i = 0; i < rules.length; i++) {
      styles.append(rules[i]);
    }
    $obj.prepend(styles);

    // rebuild items
    for (var i = 0; i < $(items).length; i++) {
      var $item = $(items[i]);
      var parent = $item.parent();
      if (parent.hasClass('item')) {
        if (!wrapper.length) {
          wrapper = parent.clone().removeClass('active').html('');
        }
        $item.unwrap();
      }
      
      var itemGroup = [$item];
      for (var x = 1; x < visibleCnt; x++) {
        var a = i + x;
        var next = $(items[a]);
        if (!next.length) {
          next = $(items[(a - $(items).length)]);
        }
        itemGroup[x] = next.clone();
      }
      var newSet = wrapper.clone().html(itemGroup);
      if (i == 0) {
        newSet.addClass('active');
      }
      newSet.appendTo($inner);
    }
  }
});


/*
$('#peo_list>li>.over-layer').mouseenter(function(){
	$('#peo_list>li').css('height','390px');
	$('#peo_list>li>.explain').css('display','none');
	$('#peo_list>li>img').css('display','none');
	$('#single-quad>a').css('display','none');
}).mouseleave(function(){
	$('#peo_list>li').css('height','');
	$('#peo_list>li>.explain').css('display','block');
	$('#peo_list>li>img').css('display','block');
	$('#single-quad>a').css('display','block');
});
/*首页师资队伍JS结束*/

