/**
 * Created by Madalin on 4/21/2017.
 */
define([
    'require',
    'angular',
    'app',
    'routes'
], function (require, ng){
    'use strict';

    require(['doomReady!'], function (document){
        ng.bootstrap(document, ['app']);
    });
});