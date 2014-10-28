 'use strict';

angular.module('stepsApp')
  .factory('stepList', [ '$http', '$q', function ( $http, $q ) {

    var deferred = $q.defer();
    var httpPromise = $http.get( '../assets/javascripts/step-list.json' );

    httpPromise.then( function( response ){
      deferred.resolve( response );
    }, function( error ){
      console.error('Error: ' + error );
    });

    // Public API here
    return {
      get: function() {
        return deferred.promise;
      }
    };
  }]);
