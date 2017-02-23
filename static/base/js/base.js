var app = angular
    .module('App', [
        'ngRoute',
        'App.controllers.Reg',
        'App.controllers.Login',
        'App.controllers.Main',
        'App.controllers.DashBoard',
        'User',
        'CsrfService',
        'LoaderService'
    ]);

app.factory('httpRequestInterceptorAddHeaders', [function () {
    return {
        request: function (config) {

            //FIXME get token from service CsrfService
            config.headers['X-CSRFToken'] = $('input[name=csrfmiddlewaretoken]').val();
            config.headers['X-Requested-With'] = 'XMLHttpRequest';

            return config;
        }
    };
}]);

app.config(
    ['$locationProvider', '$httpProvider', '$routeProvider',
     function($locationProvider, $httpProvider, $routeProvider) {

         $httpProvider.interceptors.push('httpRequestInterceptorAddHeaders');

         if (!$httpProvider.defaults.headers.get) {
             $httpProvider.defaults.headers.get = {};
         }
         
         $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
         $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

         $routeProvider
             .when('/', {
                 controller: 'login',
                 templateUrl: '/users/login-template'
             })
             .when('/login', {
                 controller: 'login',
                 templateUrl: '/users/login-template'
             })
             .when('/reg', {
                 controller: 'reg',
                 templateUrl: '/users/reg-template'
             })
             .when('/dashboard', {
                 controller: 'dashboard',
                 templateUrl: '/users/dashboard-view'
             })
         ;

         $locationProvider.html5Mode(true);

     }]
);

