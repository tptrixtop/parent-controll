var ctrl = angular.module('App.controllers.Login', []);

ctrl.controller(
    'login',
    ['$scope', '$http', '$log', '$location', '$timeout',
	 function($scope, $http, $log, $location, $timeout) {

         $scope.user_data = {
             email: "",
             password: ""
         };

         $scope.login = function() {
             
             $http({
                 method: 'POST',
                 data: $.param($scope.user_data),
                 url: '/users/try-login',
                 headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
             }).then(function(res) {

                 if(res.data.status == 0) {
                     $location.path('/dashboard')
                 }

             });

         }

         $scope.alreadyLogin = function() {
             $timeout(function() {
                 $location.path('/dashboard');
             }, 500);
         }

     }]);

