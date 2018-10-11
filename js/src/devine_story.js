(function(){
	var gnbLi =$('.gnb').find('li');
	var gnbDl=$('.gnbDl');
	var gnbDt=gnbDl.children('dt');
	
	gnbDl.hide();

	gnbLi.on('mouseover',function(e){
		e.preventDefault();	
		var i =$(this).index();
		gnbLi.eq(i).find('dl').stop().slideDown();
	});

	gnbLi.on('mouseleave',function(e){
		e.preventDefault();	
		var i =$(this).index();
		gnbLi.eq(i).find('dl').stop().slideUp();
	});

	var closeBtn =$('.closeBtn');
	var hamburger =$('.hamburger');
	
	$('.gnbshow').hide();
	
	hamburger.on('click',function(e){
		e.preventDefault();
		$('.gnbshow').fadeIn();
	})
	closeBtn.on('click',function(e){
		e.preventDefault();
		$('.gnbshow').fadeOut();
	});


	var gnbWrapLi = $('.gnbWrap').find('li');
	

	var modal = $('.modal');
	var modalBtn =$('.modalBtn');
	var close = $('.close');

	modal.hide();
	modalBtn.on('click',function(e){
		e.preventDefault();
		modal.fadeIn();
	});
	close.on('click',function(e){
		e.preventDefault();
		modal.fadeOut();
	});




})(jQuery);