var ctrl = angular.module('App.controllers.Reg', []);

ctrl.controller(
    'reg',
    ['$scope', '$http', '$log',
	 function($scope, $http, $log) {
         $log.log('load reg');
     }]);

