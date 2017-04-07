bowen.controller('MainController', ['$scope', '$location', function($scope, $location) {
    $scope.feedbacks = feedbacks;
    $scope.slider = null;
    //On load operations
    setTimeout(function() {
        $scope.slider = new slider(document.getElementById('feedbacksContainer')).init();
    }, 20);
    //Methods
    $scope.toggleMobileMenu = function toggleMobileMenu() {
        document.getElementsByClassName('menu-list')[0].classList.toggle('on');
    }
    $scope.hideMenu = function hideMenu() {
        document.getElementsByClassName('menu-list')[0].classList.remove('on');
    }
}]);