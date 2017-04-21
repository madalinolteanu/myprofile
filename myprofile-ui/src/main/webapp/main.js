/**
 * Created by Madalin on 4/21/2017.
 */
require.config({
    paths: {
        'angular': './lib/bower_components/angular/angular',
        'angular-route': './lib/bower_components/angular-route/angular-route',
        'domReady': './lib/node_modules/domReady/domReady'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});