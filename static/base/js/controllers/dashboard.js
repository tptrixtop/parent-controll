var ctrl = angular.module('App.controllers.DashBoard', ['LoaderService']);

ctrl.controller(
    'dashboard',
    ['$scope', 'LoaderService', '$log', 'User',
	 function($scope, LoaderService, $log, User) {

         $scope.to_login = LoaderService.to_login;
         
     }]);

