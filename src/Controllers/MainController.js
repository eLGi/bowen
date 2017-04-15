bowen.controller('MainController', ['$scope', '$location', function($scope, $location) {
    $scope.feedbacks = feedbacks;
    $scope.slider = null;
    //On load operations
    setTimeout(function() {
        $scope.slider = new slider(document.getElementById('feedbacksContainer')).init();
    }, 20);
    //Methods
    $scope.toggleMobileMenu = function toggleMobileMenu() {
        console.log('Yay!');
        document.getElementById('menuList').classList.toggle('on');
    }
    $scope.hideMenu = function hideMenu() {
        console.log('Nay!');
        document.getElementById('menuList').classList.remove('on');
    }
}]);