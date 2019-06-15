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

                //console.info(liobj.eq(4).children('p'));
                // liobj.eq(2).children('p').addClass('turn-photo-active');
                // liobj.eq(2).children('p').siblings().removeClass('turn-photo-active');
                liobj.each(function (i,e) {
                    $(e).removeClass().addClass(arrt[i]);
                });
                //$('#turnUL .p3 p').addClass('turn-photo-active');
            $('#lunbo li p').each(function (i,e) {
//              $(e).removeClass('turn-photo-active');
            });
//          $('#between .ul_center p').addClass('turn-photo-active');
        }
        function RightImg(arrt) {
            var liobj=$('#lunbo>li');
                arrt.push(arrt[0]);
                arrt.shift();
                liobj.each(function (i,e) {
                    $(e).removeClass().addClass(arrt[i]);
                });
            $('#lunbo li p').each(function (i,e) {
//              $(e).removeClass('turn-photo-active');
            });
            $('#lunbo .p5 p')
//          .addClass('turn-photo-active');
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
