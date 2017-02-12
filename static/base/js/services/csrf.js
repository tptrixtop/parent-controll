var csrfService = angular.module('CsrfService', [])

    .service('CsrfService', ['$log', '$http', function ($log, $http) {
        this.token = $('input[name=csrfmiddlewaretoken]').val();
    }]);
