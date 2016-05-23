$(document).ready(function() {
	
	//Faking the need to load content in order to display preloader.

	setTimeout(function(){
		$('body').addClass('loaded');
	}, 2000);
	
});