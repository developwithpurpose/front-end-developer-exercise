$(document).ready(function () {
	$('a').click(function(){
		$('html,body,div,#contentContainer').animate( {
        	scrollTop: $(this.hash).offset().top
			}, 1000);
    	return false;
	})
});

