/**
 * Created by Madalin on 4/21/2017.
 */
require.config({

    paths: {
        'angular': './lib/bower_components/angular/angular',
        'angular-route': './lib/bower_components/angular-route/angular-route',
        'domReady': './lib/node_modules/domReady/domReady'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
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