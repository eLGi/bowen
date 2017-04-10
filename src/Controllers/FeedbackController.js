bowen.controller('FeedbackController', ['$scope', '$location', function($scope, $location) {
    //properties
    $scope.feedbackID = $location.search().id;
    $scope.feedback = feedbacks[$scope.feedbackID];
    //On load
    document.getElementById('viewStyle').href = '/css/views/feedback.css';
    //Methods
}]);