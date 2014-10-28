 'use strict';

angular.module('stepsApp')
  .factory('babySteps', [ '$http', '$q', function ( $http, $q ) {


    var deferred = $q.defer();
    var httpPromise = $http.get( 'assets/javascripts/baby-steps.json' );

    httpPromise.then( function( response ){
      deferred.resolve( response );
    }, function( error ){
      console.error('Error:' + error );
    });

    return {
      get: function() {
        return deferred.promise;
      }
    };
  }]);
