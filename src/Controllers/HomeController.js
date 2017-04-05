bowen.controller('HomeController', ['$scope', '$location', function($scope, $location) {
    $scope.feedbacks = feedbacks;
    $scope.slider = null;
    //On load operations
    setTimeout(function() {
        $scope.slider = new feedbackSlider(document.getElementById('feedbacksContainer')).init();
    }, 20);
    //Methods
}]);