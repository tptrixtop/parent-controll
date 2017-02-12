var ctrl = angular.module('App.controllers.Reg', ['CsrfService']);

ctrl.controller(
    'reg',
    ['$scope', '$http', '$log',
	 function($scope, $http, $log) {

         $scope.user_data = {
             email: "asd@asd.asd",
             password: "asd",
             repeat_pass: "asd"
         };

         $scope.register = function() {

             if($scope.user_data.password != $scope.user_data.repeat_pass) {
                 $('#pass').tooltip({
                     title: "Password do not match",
                     placement: "right"
                 }).tooltip('show');
             } else {

                 $http({
                     method: 'POST',
                     data:   $.param($scope.user_data),
                     url: 	 '/users/reg-profile',
                     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                 }).then(function(res) {
                     
                     $log.log(res.data);

                 });

             }

         }

     }]);

