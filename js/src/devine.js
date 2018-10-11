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
	

	$('.dt').hide();
	gnbWrapLi.on('click',function(e){
		e.preventDefault();
		var i = $(this).index();
		gnbWrapLi.eq(i).find('dt').slideDown();
		gnbWrapLi.eq(i).siblings().find('dt').slideUp();
	});
/*
	var i = $(this).index();
	var mydt =gnbWrapLi.eq(i).find('dt').css('display');

	if(mydt === 'block'){
		mydt.slideUp(3000);
	}else{
		mydt.slideDown(3000);
	}

	var riceBox =$('.riceBox');
	var rice =$('.rice');
	var riceP =$('.rice_sub').children('p');

	var riceH =rice.innerHeight();
	var nowT =0, per, myP;

	var myScroll =function() {
		per =nowT /riceH *100;
		(per >=100)? per=100:per=per;
		myP = 'center' + 'per';
	riceBox.css({backgroundPosition:myP+'%'});
	rice.stop(true,false).animate({
		transform:'translateY('+ -per*10 +'px)',
	},300);
	};

	myScroll();*/

	$(window).on('scroll',function(){
		nowT = $(this).scrollTop();
	});

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