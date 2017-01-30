var app = angular
    .module('App', [
        'ngRoute',
        'App.controllers.Reg'
    ]);

app.config(
    ['$locationProvider', '$httpProvider', '$routeProvider',
     function($locationProvider, $httpProvider, $routeProvider) {

         $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

         if (!$httpProvider.defaults.headers.get) {
             $httpProvider.defaults.headers.get = {};    
         }
         
         $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
         $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

         $routeProvider
             .when('/', {
                 controller: 'reg',
                 templateUrl: '/users/reg'
             })
         ;

     }]
);

