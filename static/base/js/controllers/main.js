var ctrl = angular.module('App.controllers.Main', ['LoaderService']);

ctrl.controller(
    'main',
    ['$scope', 'LoaderService',
	 function($scope, LoaderService) {
         $scope.loader = LoaderService;
     }]);

