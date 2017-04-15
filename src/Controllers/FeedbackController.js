bowen.controller('FeedbackController', ['$scope', '$location', function($scope, $location) {
    //properties
    $scope.feedbackID = $location.search().id;
    $scope.feedback = feedbacks[$scope.feedbackID];
    $scope.icon = 'assets/images/icons/menu-black.png';
    //On load
    document.getElementById('viewStyle').href = '/css/views/feedback.css';
    //Methods
}]);