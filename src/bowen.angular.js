var bowen = angular.module('bowen', ['ngRoute', 'ngSanitize']);

bowen.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    var url = window.location.href.split('#')[0];
    $routeProvider
        .when('/', {
            templateUrl: url + '/src/Templates/home.html',
            controller: 'HomeController'
        })
        .when('/feedback', {
            templateUrl: url + '/src/Templates/feedback.html',
            controller: 'FeedbackController'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);