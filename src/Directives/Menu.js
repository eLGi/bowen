bowen.directive('menu', function() {
    return {
        restrict: 'EA',
        scope: {
            icon: '=icon',
            toggleMobileMenu: '&toggleMobileMenu',
            hideMobileMenu: '&hideMobileMenu'
        },
        link: function(scope, element, attrs) {

        },
        templateUrl: url + 'src/Templates/Directives/menu.html'
    };
});