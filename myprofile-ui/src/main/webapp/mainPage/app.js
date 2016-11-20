'use strict';

var myApp = angular.module("myApp",[
    'ngRoute',
    'ui.bootstrap',
    'login'
]);

myApp.controller("myController",['$scope',function ($scope){

    $scope.message = "This is Madalin";
}]);