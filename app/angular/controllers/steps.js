'use strict';

angular.module('stepsApp')
  .controller('StepsCtrl', [ '$scope', '$routeParams', 'stepList',  'babySteps', function ($scope, $routeParams, stepList, babySteps) {

  	$scope.currentStep = parseInt( $routeParams.step, 10);

    stepList.get().then( function( response ){
		$scope.steps = response.data;

		$scope.isActive = function(currentStep) {

			if(   _.isNumber( parseInt($routeParams.step, 10) ) &&
				parseInt($routeParams.step, 10) > 0 &&
				$scope.steps[$routeParams.step - 1] === currentStep ){
				return true;
			}

			return false;
    		};

	}, function( error ){
		console.error( 'error: ', error );
	});

      babySteps.get().then( function( response ){

      	$scope.friendList = _.chain(response.data.friends)
      				.where({ 'babyStep': $scope.currentStep  })
					.sortBy( function(friend){
			      		return friend.lastName;
			      	})
					.value();

	}, function( error ){
		console.error( 'error: ', error );
	});

  }]);
