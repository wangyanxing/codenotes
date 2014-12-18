//var app = angular.module('codenotes', []);
app.controller('categoryNaviController', function($scope) {
    socket.on('menu', function (menus) {
        $scope.menuitems = menus;
        $scope.$apply();
	});
    emit('menu');
    
    $scope.ngShowHome = function()
    {
        showHome();
    }
    $scope.ngShowCategoryTable = function(target)
    {
        showCategoryTable(target.getAttribute('data'));
    }
    ngScopes.menu = $scope;
});