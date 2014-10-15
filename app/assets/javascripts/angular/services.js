'use strict';

/* Services */

var sevenBabyStepsServices = angular.module( 'sevenBabyStepsServices', [ 'ngResource', 'ngSanitize' ] );

sevenBabyStepsServices.factory( 'Data', [ '$resource', '$q', '$http',
	function( $resource, $q, $http ){
		return {
			getSteps: function() {
				var deferred = $q.defer();
				var httpPromise = $http.get( 'assets/javascripts/seven-baby-steps.json' );

				httpPromise.then( function( response ){
					deferred.resolve( response );
				}, function( error ){
					console.log( error );
				});

				return deferred.promise;
			},

			getFriends: function() {
				var deferred = $q.defer();
				var httpPromise = $http.get( 'assets/javascripts/baby-steps.json' );

				httpPromise.then( function( response ){
					deferred.resolve( response );
				}, function( error ){
					console.log( error );
				});

				return deferred.promise;
			}
		}
	}
]);
