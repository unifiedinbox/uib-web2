define(["require", "exports", 'intern/dojo/has'], function (require, exports, has) {
    (function () {
        return this;
    })().dojoConfig = {
        async: true,
        deferredInstrumentation: false,
        requestProvider: 'app/tests/mocks/all'
    };
    var config = {
        proxyPort: 9000,
        proxyUrl: 'http://localhost:9000/',
        tunnel: 'NullTunnel',
        maxConcurrency: 1,
        environments: [
            { browserName: 'chrome' }
        ],
        excludeInstrumentation: /^node_modules|^src\/(?:mayhem|app\/tests)/,
        loader: {
            packages: [
                { name: 'app', location: 'src/app' },
                { name: 'dgrid', location: 'src/dgrid' },
                { name: 'dijit', location: 'src/dijit' },
                { name: 'dojo', location: 'src/dojo' },
                { name: 'dstore', location: 'src/dstore' },
                { name: 'esprima', location: 'src/esprima', main: 'esprima' },
                { name: 'intl', location: 'src/intl', main: 'Intl.complete' },
                { name: 'intl-messageformat', location: 'src/intl-messageformat/dist', main: 'intl-messageformat-with-locales' },
                { name: 'mayhem', location: 'src/mayhem' },
                { name: 'messageformat', location: 'src/messageformat', main: 'messageformat' },
                { name: 'put-selector', location: 'src/put-selector' },
                { name: 'xstyle', location: 'src/xstyle' },
                { name: 'strophe', location: 'src/strophe' }
            ]
        },
        useLoader: {
            'host-browser': '../../src/dojo/dojo.js'
        },
        reporters: has('host-node') ? ['pretty', 'lcovhtml'] : ['console', 'html'],
        suites: [
            'app/tests/unit/all'
        ],
        functionalSuites: [
            'app/tests/functional/all'
        ]
    };
    return config;
});
//# sourceMappingURL=intern-local.js.map