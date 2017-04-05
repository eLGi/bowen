var bowen = angular.module('bowen', ['ngRoute', 'ngSanitize']);

bowen.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: '/src/Templates/Home.html',
            controller: 'HomeController'
        })
        .when('/feedback', {
            templateUrl: '/src/Templates/feedback.html',
            controller: 'FeedbackController'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);