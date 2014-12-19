//var app = angular.module('codenotes', []);
app.controller('manageNaviController', function($scope) {  
    $scope.ngShowHome = function()
    {
        showHome();
    }
    $scope.ngShowAdd = function()
    {
        showAddNote();
    }
    $scope.ngShowReport = function()
    {
        showManageNote();
    }
    ngScopes.menu = $scope;
});