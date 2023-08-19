var app = angular.module("myApp", []);

app.controller("contactListController", function($scope){
    $scope.items = [];
    
    $scope.addItem = function(item){
        $scope.items.push(item);
        $scope.item = {}
    }

    $scope.removeItem = function(index){
        $scope.items.splice(index,1);
    }

    $scope.editItem = function(item){
        $scope.editContentIndex = $scope.items.indexOf(item);
    }
});
