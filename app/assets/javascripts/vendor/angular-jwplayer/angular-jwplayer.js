'use strict';
angular.module('angular-jwplayer', []).directive('jwplayer', [ function () {

	var defaultProps = {
		id : 'angular-jwplayer-' + Math.floor((Math.random()*999999999)+1)
	};

	return {
		restrict: 'EC',
		scope: {
			id: '@id',
			setupVars: '=setup'

		},

		template: function(scope, element, attrs) {
			if(scope.id === null || typeof(scope.id) === undefined)
				scope.id = defaultProps.id;

			return "<div id='" + scope.id + "'></div>";
		},
		
		link: function(scope, element, attrs) {
			if(scope.id === null || typeof(scope.id) === undefined)
				scope.id = defaultProps.id;

			jwplayer(scope.id).setup(scope.setupVars);
		}
	};
}]);