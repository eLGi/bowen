var bowen = angular.module('bowen', ['ngRoute', 'ngSanitize', 'duScroll']);

bowen.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: url + '/src/Templates/home.html',
            controller: 'HomeController'
        })
        .when('/feedback', {
            templateUrl: url + '/src/Templates/feedback.html',
            controller: 'FeedbackController'
        })
        .when('/biofeedback', {
            templateUrl: url + '/src/Templates/biofeedback.html',
            controller: 'BiofeedbackController'
        })
        .when('/bowen', {
            templateUrl: url + '/src/Templates/bowen.html',
            controller: 'BowenController'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);