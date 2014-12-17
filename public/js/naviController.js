var app = angular.module('codenotes', []);
app.controller('categoryNaviController', function($scope) {
    $scope.menuitems = [{name:"Number"}, {name:"Sort"}, {name:"Tree"}, {name:"Sum"}];
});