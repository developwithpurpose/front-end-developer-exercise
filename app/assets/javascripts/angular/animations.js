'use strict';

/* Animations */
var sevenBabyStepsAnimations = angular.module( 'sevenBabyStepsAnimations', ['ngAnimate'] );

sevenBabyStepsAnimations.animation( '.step', function() {
	return {
		enter: function( element, done ) {
			element.addClass('active');
			var stepId = element.find( 'article' ).attr( 'id' ),
				stepNum = stepId.substring( 5, 6 ),
				previousId = $('#steps').find('.active').find('article').attr('id'),
				previousStepnum = previousId.substring( 5, 6 );

			if ( previousStepnum < stepNum ) {
				element.css('top', 681).animate({top: 60});
			} else {
				element.css('top', -324).animate({top: 60});
			}

			//run the animation here and call done when the animation is complete
			return function(cancelled) {
				//this (optional) function will be called when the animation
				//completes or when the animation is cancelled (the cancelled
				//flag will be set to true if cancelled).
			};
		},
		leave: function(element, done) {
			element.removeClass('active');
			var stepId = element.find( 'article' ).attr( 'id' ),
				stepNum = stepId.substring( 5, 6 ),
				previousId = $('#steps').find('.active').find('article').attr('id'),
				previousStepnum = previousId.substring( 5, 6 );

			if ( previousStepnum < stepNum ) {
				element.animate({top: 681});
			} else {
				element.animate({top: -324});
			}

		},
		move: function(element, done) {
		},

		//animation that can be triggered before the class is added
		beforeAddClass: function(element, className, done) {
		},

		//animation that can be triggered after the class is added
		addClass: function(element, className, done) {
		},

		//animation that can be triggered before the class is removed
		beforeRemoveClass: function(element, className, done) {
		},

		//animation that can be triggered after the class is removed
		removeClass: function(element, className, done) {
		}
	};
});