var bowen = angular.module('bowen', ['ngRoute', 'ngSanitize']);

bowen.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'src/Templates/home.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);