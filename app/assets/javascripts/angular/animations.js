'use strict';

/* Animations */
var $currentArticle,
	sevenBabyStepsAnimations = angular.module( 'sevenBabyStepsAnimations', ['ngAnimate'] );

sevenBabyStepsAnimations.animation( '.step', function() {
	return {
		enter: function( element, done ) {
			element.hide().fadeIn();

			//run the animation here and call done when the animation is complete
			return function(cancelled) {
				//this (optional) function will be called when the animation
				//completes or when the animation is cancelled (the cancelled
				//flag will be set to true if cancelled).
			};
		},
		leave: function(element, done) {
			element.show().fadeOut();
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