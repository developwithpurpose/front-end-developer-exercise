(function ($) {

	var currentURL = document.URL,
		currentStep = currentURL.substring( currentURL.length - 1, currentURL.length );

	if( currentStep == '/' )
		currentStep = 1;

	$( '#nav a.step' + currentStep ).addClass( 'active' );

	$( '#nav' ).on( 'click', 'a', function( event ) {
		// event.preventDefault();

		var $this = $( this ),
			$currentActive = $( '#nav' ).find( '.active' ),
			isActive = $this.hasClass( 'active' );

		if ( !isActive ) {
			$currentActive.removeClass( 'active' );
			$this.addClass( 'active' );
		}
	});

})(this.jQuery);
