define(['./module'], function(services){
    'use strict';

    services.service('loginServices', ['$http', function($http){
        return{
            login: function(path, currentPath){
                return $http({
                    method: 'POST',
                    url: path + currentPath

                }).then(function (response){
                    return response;
                }).catch(function (error){
                    return error;
                });
            }
        }
    }])
});