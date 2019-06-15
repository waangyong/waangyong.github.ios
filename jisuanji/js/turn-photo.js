
	$(document).ready(function () {
        var arrt=["p1","p2","p3","p4","p5","p6","p7","p8"];
        var liobj=$('#turnUL>li');
        var setobj=setInterval(function () {
            LeftImg(arrt);
        },3000);
	    function LeftImg(arrt) {
            var liobj=$('#turnUL>li');
                arrt.unshift(arrt[7]);
                arrt.pop();

                //console.info(liobj.eq(4).children('p'));
                // liobj.eq(2).children('p').addClass('turn-photo-active');
                // liobj.eq(2).children('p').siblings().removeClass('turn-photo-active');
                liobj.each(function (i,e) {
                    $(e).removeClass().addClass(arrt[i]);
                });
                //$('#turnUL .p3 p').addClass('turn-photo-active');
            $('#turnUL li p').each(function (i,e) {
                $(e).removeClass('turn-photo-active');
            });
            $('#turnUL .p5 p').addClass('turn-photo-active');
        }
        function RightImg(arrt) {
            var liobj=$('#turnUL>li');
                arrt.push(arrt[0]);
                arrt.shift();
                liobj.each(function (i,e) {
                    $(e).removeClass().addClass(arrt[i]);
                });
            $('#turnUL li p').each(function (i,e) {
                $(e).removeClass('turn-photo-active');
            });
            $('#turnUL .p5 p').addClass('turn-photo-active');
        }
        var leftbtn=$(".turn-photo .left-slip");
	    leftbtn.click(function () {
            LeftImg(arrt);
        });
        var rightbtn=$(".turn-photo .right-slip");
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