$(document).ready(function(){
	
	/* $('.thisbutton').prop('disabled',false); */
	/* $('.thisbutton').removeAttr('disabled'); */
	/* $('.thisbutton').attr('disabled',false); */
	
	
	$('.disabledText').css('opacity',0.2);
	$('.dropdownContent').hide();
	
	$('.initialHide').hide();
	
	$('li').on('mouseover',function(){
	$('li').not(this).children().hide();
	$(this).children().show();
	});
	$('.menu').on('mouseout',function(){
		$('.msgBox').hide();
	});
	
	$('.slider').on('click',function(){
		$('.slider').toggleClass('sliderOn');
		
		if($('.slider').hasClass('sliderOn')){
		$('.disabledText').css('opacity',0.2);
		$('.enabledText').css('opacity',1);
	}
	else{
		$('.disabledText').css('opacity',1);
		$('.enabledText').css('opacity',0.2);
	}
	});
	
	$('.dropDown').on('click',function(){
		
		var temp = $(this).find('.dropdownContent');
		$('.dropdownContent').not(temp).hide();
		temp.toggle();
		var temp1 = $(this);
		
		var res = temp1.closest('.test1').toggleClass('here');
		
		//var res = temp.closest('.col-12').find('.dropDown').find('.dropdownContent').toggleClass('here');
		//var res = temp.closest('.col-12').find('.dropdownContent').find('.testclass1').closest('.row').toggleClass('here');
		console.log(res);
		
		
	});
	$('.dropdownContent li').on('click',function() {
		var el = $(this);
		//console.log(this);
		var selectedoption = el.data('selected');
		//var res = el.closest('.mainContent').addClass('here');
		//console.log(res);
		
		$('.drop').attr('data-selectedq',selectedoption);
		//console.log(selectedoption);
		
	});
	
	$('.dropdownContent').not('.optn').on('click',function(){
	alert('here');
	});
	
	
});



/* $('*').on('click',function(e){
	var blacklist1 = $('.drop');
	if(!blacklist1.is(e.target)){
		$('.dropdownContent').hide();
	}
}); */

	
