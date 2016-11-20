'use strict';

angular.module('login',[])
    .controller('loginController',['$scope',function($scope){

    $scope.name = "Name:";
    $scope.password = "Password:";
    $scope.loginMessage = "Please type the Name and Password"
}]);