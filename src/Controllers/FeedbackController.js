bowen.controller('FeedbackController', ['$scope', '$location', function($scope, $location) {
    $scope.feedbackID = $location.search().id;
    $scope.feedback = feedbacks[feedbackID];
}]);