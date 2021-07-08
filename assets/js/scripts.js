$(document).ready(function(){


	// banner slider
	$('.partner-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    autoplay:true,
	    nav:false,
	    autoplayTimeout:3000,	    
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        414:{
	        	items:3,
	        },
	        576:{
	        	items:4,
	        },
	        922:{
	        	items:5,
	        }

	    }
	});


	// mobile humbar
	$('.all-p-humber').click(function(){
		$(this).toggleClass('open');
	});	

	// Start Humber Main Menu Icon Js
	$('.all-p-humber').click(function(){
		$('.main_menu').slideToggle(300);
	});
})

$(window).scroll(function(){
	var scrollvalue = $(this).scrollTop();

	// sticky
	if(scrollvalue>120){
		$('header').addClass('sticky');
	}else{
		$('header').removeClass('sticky');
		
	}
});

