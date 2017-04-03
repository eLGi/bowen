var bowen = angular.module('bowen', ['ngRoute', 'ngSanitize']);

bowen.config('$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/src/Templates/home.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        })
});