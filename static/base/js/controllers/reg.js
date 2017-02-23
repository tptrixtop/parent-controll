var ctrl = angular.module('App.controllers.Reg', ['LoaderService']);

ctrl.controller(
    'reg',
    ['$scope', '$http', '$log', '$timeout', 'LoaderService', '$location',
	 function($scope, $http, $log, $timeout, LoaderService, $location) {

         $scope.user_data = {
             email: "",
             password: "",
             repeat_pass: ""
         };


         $scope.check_uniq_later_bound;
         $scope.check_uniq_later_bound_latency = 1000;
         var tooltip_destroyed = true;
         $scope.checkUniqEmail = function() {

             if($scope.check_uniq_later_bound) {
                 $timeout.cancel($scope.check_uniq_later_bound);
             }

             if(!tooltip_destroyed) {
                 $('#email').tooltip('destroy');
                 tooltip_destroyed = true;
             }

             $scope.check_uniq_later_bound = $timeout(function() {

                 if($scope.user_data.email == "") {
                     return;
                 }

                 LoaderService.isLoad = true;

                 $http({
                     method: 'GET',
                     url: 	 '/users/chk-email?email=' + $scope.user_data.email,
                     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                 }).then(function(res) {                   

                     LoaderService.isLoad = false;
                     if(res.data.status != 1) {
                         $('#email').tooltip({
                             title: res.data.msg,
                             placement: "right"
                         }).tooltip('show');
                         tooltip_destroyed = false;
                     }

                 });

             }, $scope.check_uniq_later_bound_latency);
             
         }

         $scope.register = function() {

             if($scope.user_data.password != $scope.user_data.repeat_pass) {
                 $('#pass').tooltip({
                     title: "Password do not match",
                     placement: "right"
                 }).tooltip('show');
             } else {

                 LoaderService.global = true;

                 $http({
                     method: 'POST',
                     data:   $.param($scope.user_data),
                     url: 	 '/users/reg-profile',
                     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                 }).then(function(res) {
                     
                     LoaderService.global = false;
                     if(res.data.status == 0) {
                         $location.path('/')
                     }

                 });

             }

         }

     }]);

