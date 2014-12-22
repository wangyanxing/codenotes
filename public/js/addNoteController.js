//var app = angular.module('codenotes', []);
var categoryDictionary = [];
app.controller('categoryCurrentController', function($scope) {  
    $scope.currentNodeCategoryList = [];
    
    $scope.noteId = false;
    
    socket.on('menu', function(menu){
        for(var i=0; menu[i]; i++)
        {
            categoryDictionary.push(menu[i].name);
        }
    });
    
    socket.on('detail', function(detail){
        $scope.currentNodeCategoryList = detail.currentNodeCategoryList;
        $scope.ifd_submitter = detail.ifd_submitter;
        $scope.ifd_title = detail.title;
        $scope.ifd_description = detail.ifd_description;
        $scope.html = detail.html;

        $scope.$apply();
    });
    
    if($scope.noteId)
        socket.emit('detail', $scope.noteId);
    
    socket.on('newNoteSuccess', function(){
        alert('success.');
        $scope.currentNodeCategoryList = [];
        $scope.ifd_submitter = '';
        $scope.ifd_title = '';
        $scope.ifd_description = '';
        $scope.html = '';
        
        $scope.noteId = false;
        
        $scope.$apply();
    });
    
    emit('menu');
    
    $scope.removeCategory = function(target)
    {
        var category = target.getAttribute('categoryName');
        
        
        for(var i = $scope.currentNodeCategoryList.length-1; i>=0; i--)
        {
            if($scope.currentNodeCategoryList[i]==category)
            {
                $scope.currentNodeCategoryList.splice(i, 1);
            }
        }
    }
    
    $scope.addNewCategory = function()
    {
        var category = $scope.ifd_currentCategory;
        $scope.ifd_currentCategory = "";
        var inDictionary = false;
        for(var i=0; categoryDictionary[i]; i++)
        {
            if(categoryDictionary[i]==category)
            {
                inDictionary = true;
                break;
            }
        }
        if(!inDictionary)
        {
            categoryDictionary.push(category);
            emit('newCategory', category);
        }
        
        $scope.currentNodeCategoryList.push(category);
        hideNewCategoryDialog();
    }
    
    $scope.showCategoryDialog = function()
    {
        showNewCategoryDialog();
    }
    
    ngScopes.addNote = $scope;
});

var showNewCategoryDialog = function()
{
    $('#btn_categoryShowHide').css('display', 'none');
    $('#the-basics').css('display', 'block');
}

var hideNewCategoryDialog = function()
{
    $('#btn_categoryShowHide').css('display', 'block');
    $('#the-basics').css('display', 'none');
}