var app = angular.module('codeCategorys', []);

app.filter('offset', function() { 
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
});

//var categoryTableController = app.controller("categoryTableController", function($scope) {
var categoryTableController = function($scope) {
    $scope.itemsPerPage = 10;
    $scope.currentPage = 0;
    $scope.items = [];
    for (var i=0; i<50; i++) {
        $scope.items.push({id: i, fname: "fname "+ i, lname: "lname " + i, fname: "fname " + i, email: "email " + i });
    }

    $scope.prevPage = function() { 
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };


    $scope.prevPageDisabled = function() {
        return $scope.currentPage === 0 ? "disabled" : "";
    };


    $scope.pageCount = function() {
        return Math.ceil($scope.items.length/$scope.itemsPerPage)-1;
    };


    $scope.nextPage = function() {
        if ($scope.currentPage < $scope.pageCount()) {
            $scope.currentPage++;
        }
    };

    $scope.nextPageDisabled = function() {
        return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    }
}