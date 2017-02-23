var loaderService = angular.module('LoaderService', [])

    .service('LoaderService', ['$location', function ($location) {

        this.isLoad = false;
        this.global = false;

        this.to_login = function() {
            $location.path('/login')
        }

    }]);
