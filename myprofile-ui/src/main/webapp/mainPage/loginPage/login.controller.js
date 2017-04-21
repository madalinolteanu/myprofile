'use strict';

login.controller('loginController',['$scope',function($scope){

    $scope.name = "Name:";
    $scope.password = "Password:";
    $scope.loginMessage = "Simple login page";
    $scope.passwordPlaceholder = "Type Password";
    $scope.namePlaceholder = "Type Name";
    $scope.loginButton = "Login";

    $scope.login = function (){

        alert($scope.loginName, $scope.loginPassword);
    }
}]);