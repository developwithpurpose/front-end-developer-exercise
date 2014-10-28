'use strict';

angular.module('stepsApp').animation('.steps', function () {
	return {
		enter : function(element, done) {
			element.css({
				'position': 'static'
			});
		},
		leave : function(element, done) {
			element.css({
				'position': 'absolute'
			});
		    	element.velocity({
		       	right: '-100%',
		       	opacity: 0,
		       	fontSize: '/=5'
		      }, 1000, done);
		}
	};
});
