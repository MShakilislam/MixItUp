
$(document).ready(function(){

	//mixitup

	var mixer = mixitup('.gallery');
	//counter up


	$('.single_fun h2').counterUp({
	    delay: 10,
	    time: 2000
	});
	//menu items
	$('.menu_icone').click(function(){
		$('.menu ul').slideToggle(500);
	});

});