$( document ).ready(function (){

	function goToByScroll(id){
	    $('html,body').animate({
	        scrollTop: $("#"+id).offset().top},
	        'slow');
	}

	$("#cmd_learn_more").click(function(e) { 
        e.preventDefault(); 
	    goToByScroll("section2");           
	});

	$('.share').share({
	  url: 'https://www.ubiplug.com/awair/',
	  text: 'Real time air quality monitoring system. A beautiful way to take care of yourself',
	  facebook: {
		  name: 'Awair',
		  link: 'https://www.ubiplug.com/awair/',
		  image: 'https://www.ubiplug.com/awair/images/mockups/1.png',
		  caption: 'Awair',
		  text: 'Real time air quality monitoring system. A beautiful way to take care of yourself'
		},

		twitter: {
		  text: 'Awair, real time air quality monitoring system. A beautiful way to take care of yourself',
		  link: 'https://www.ubiplug.com/awair/'
		},

		gplus: {
		  link: 'https://www.ubiplug.com/awair/'
		}
	});

});