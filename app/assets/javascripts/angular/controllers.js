'use strict';

/* Controllers */

var sevenBabyStepsControllers = angular.module( 'sevenBabyStepsControllers', ['ngAnimate'] );

sevenBabyStepsControllers.controller(
	'stepController',
	[
		'$scope', '$routeParams', 'Data',
		function( $scope, $routeParams, Data ){

			$scope.stepNum = $routeParams.step;

			Data.getFriends().then( function( response ){

				var friends = response.data.friends,
					friendFilter = _.filter( friends, function( friend ){
						return friend.babyStep == $scope.stepNum;
					}),
					selectedFriends = _.sortBy( friendFilter, function( friend ){
						return friend.lastName;
					});

				switch( selectedFriends.length ){
					case 0:
						$scope.otherFriends = '';
						break;
					case 1:
						$scope.otherFriends = getFriends( selectedFriends, 1 ) + ' is also in Baby Step 2';
						break;
					case 2:
						$scope.otherFriends = getFriends( selectedFriends, 2 ) + ' are also in Baby Step 3';
						break;
					case 3:
						$scope.otherFriends = getFriends( selectedFriends, 2 ) + ', and 1 other friend are also in Baby Step 4';
						break;
					default:
						var friendCnt = selectedFriends.length - 2;
						$scope.otherFriends = getFriends( selectedFriends, 2 ) + ', and ' + friendCnt + ' other friends are also in Baby Step ' + $scope.stepNum;
				}

			}, function( error ){
				console.error( 'error: ', error );
			});

			Data.getSteps().then( function( response ){
				$scope.step = response.data[ 'step-' + $routeParams.step ][ 0 ];
			}, function( error ){
				console.error( 'error: ', error );
			});

			$scope.checkFriends = function( step ){
				console.log( step );
			};

		}
	]
);

function getFriends( friends, num ){
	var html = "";
	for( var x = 0; x < num; x++ ){
		var seperator = ( x > 0 ) ? ', ' : '',
			firstName = friends[ x ].firstName,
			lastName = friends[ x ].lastName;
		html = html + seperator + '<a href="#">' + firstName + ' ' + lastName + '</a>';
	}
	return html;
}