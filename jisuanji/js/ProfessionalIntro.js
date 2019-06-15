$(document).ready(function(){
	myul=$('.proIns_div>div>ul');
	myul.eq(1).hide();
	myul.eq(2).hide();
	//alert(myul.length);
	$('.proIns_div>div>a').click(function(){
		ul2=$($(this).parent().children('ul'));
		//alert(ul2);
		
		s=parseInt(ul2.attr('s'));
		if(s%2!=0)
		{
			ul2.hide();
			ul2.attr('s',s+1);
			//alert(parseInt(ul2.attr('s')));
		}else{
			ul2.show();
			ul2.attr('s',s+1);
		}
		//alert(s+1);
		//
	});
	myli=$('.proIns_div>div>ul>li');
	infoDiv=$('.proIns_div_right');
	//alert(myli.length);
	$('.proIns_div>div>ul>li').click(function(){
		//alert(myli.length);
		$(this).addClass('action_li');
		$('.proIns_div>div>ul>li').not($(this)).removeClass('action_li');
		var index=parseInt($(this).attr('s'));
		infoDiv.eq(index-1).addClass('active_information');
        infoDiv.not(infoDiv.eq(index-1)).removeClass('active_information');
		//alert(infoDiv.not(infoDiv.eq(index-1)));
	});
	/***********************************************************************/

});
