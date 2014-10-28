'use strict';

angular
  .module('stepsApp', [
    'ngRoute',
    'ngAnimate'])
  .config(function($logProvider){
    $logProvider.debugEnabled(true);
  }).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/:step', {
          templateUrl: '/angular/views/steps.html',
          controller: 'StepsCtrl'
      })
      .otherwise({
        redirectTo: '/1'
      });
  }]);
