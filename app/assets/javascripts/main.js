
angular
  .module("stepsApp", [
    "ngRoute",
    "ngAnimate"])
  .config(function($logProvider){
    "use strict";

    $logProvider.debugEnabled(true);
  }).config(["$routeProvider",
  function($routeProvider) {
    "use strict";

    $routeProvider.
      when("/:step", {
          templateUrl: "/angular/views/steps.html",
          controller: "StepsCtrl"
      })
      .otherwise({
        redirectTo: "/1"
      });
  }]);
