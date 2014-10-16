'use strict';

/* App Module */

var app = angular.module(
	'sevenBabySteps', [
		'ngRoute',
		'ngAnimate',
		'sevenBabyStepsAnimations',
		'sevenBabyStepsControllers',
		'sevenBabyStepsServices'
	]
);

app.run( [ '$templateCache', function ( $templateCache ) { $templateCache.removeAll(); } ] );

app.config([

	'$routeProvider',

	function( $routeProvider ) {

		$routeProvider.
			when( '/:step', {
				templateUrl: 'templates/steps.html',
				controller: 'stepController'
			}).
			otherwise({
				redirectTo: '/1'
			});

	}

]);
