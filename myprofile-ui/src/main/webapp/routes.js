/**
 * Created by Madalin on 4/21/2017.
 */
define(['./app'], function(app){
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider){
        $routeProvider.when('/login',{
            templateUrl: 'login/main.html',
            controller: 'mainCtrl'
        });
    }])
});