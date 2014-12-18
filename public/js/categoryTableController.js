//var app = angular.module('codenotes', []);

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
    
    //for (var i=0; i<100; i++) {
    //    $scope.items.push({id: i, fname: "fname "+ i, lname: "lname " + i, fname: "fname " + i, email: "email " + i });
    //}
    
    socket.on('categoryTable', function (items) {
        $scope.itemsPerPage = 10;
        $scope.currentPage = 0;
        $scope.items = items;
        $scope.$apply();
	});

    $scope.prevPage = function() { 
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
            $scope.updatePagger();
        }
    };

    ngScopes.categoryTable = $scope;

    $scope.prevPageDisabled = function() {
        return $scope.currentPage === 0 ? "disabled" : "";
    };


    $scope.pageCount = function() {
        return Math.ceil($scope.items.length/$scope.itemsPerPage)-1;
    };
    
    $scope.setPage = function(n)
    {
        if(n<0)
            $scope.currentPage = 0;
        else if(n>$scope.pageCount())
            $scope.currentPage = $scope.pageCount() - 1;
        else
            $scope.currentPage = n;
        
        $scope.updatePagger();
    };
    
    $scope.updatePagger = function()
    {
        var page = $scope.pageCount() + 1;
        var lastIndex = (($scope.currentPage + 5)<page?($scope.currentPage + 4):page-1);
        var initIndex = $scope.currentPage;

        if((page - lastIndex)<=4)
        {
            initIndex = lastIndex - 4;
        }
        
        $scope.pagerIndex = [];
        for(var i=initIndex; i<=lastIndex; i++)
            $scope.pagerIndex.push(i+1);
    }
    
    $scope.nextPage = function() {
        if ($scope.currentPage < $scope.pageCount()) {
            $scope.currentPage++;
            $scope.updatePagger();
        }
    };

    $scope.nextPageDisabled = function() {
        return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    }
    
    $scope.goToDetail = function(target)
    {
        var id = target.getAttribute('key');
        showNoteDetail(id);
    }
    
    $scope.setPage(0);
}