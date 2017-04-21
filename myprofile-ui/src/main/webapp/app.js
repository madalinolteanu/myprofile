define([
    'angular',
    'angular-route',
    './directives/index',
    '.services/index',
    './login/index'
], function (angular){
    'use strict';

    return angular.module('app', [
        'ui.bootstrap',
        'app.directives',
        'app.services',
        'login',
        'pascalprecht.translate',
        'ngRoute'
    ]).config(['$translateProvider', '$translatePartialLoaderProvider', function ($translateProvider, $translatePartialLoaderProvider){
        $translatePartialLoaderProvider.addPart('main');
        $translateProvider.useLoader('$translatePartialLoader',{
            urlTemplate: 'i18n/{lang}/{part}.json'
        });
    }])
});