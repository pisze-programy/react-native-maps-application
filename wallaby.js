module.exports = function (wallaby) {
    // Babel needs this
    process.env.NODE_ENV = 'development';

    return {
        files: [
            '!app/**/*.test.js',
            'app/**/*.js',
            'package.json',
        ],

        tests: [
            'app/**/*.test.js',
        ],

        env: {
            type: 'node',
            runner: 'node',
        },

        testFramework: 'jest',

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: [
                    'react-native',
                ],
                plugins: [
                    'transform-flow-strip-types',
                    'transform-object-rest-spread',
                    'transform-async-to-generator',
                ],
            }),
        },

        setup: (wallaby) => {
            wallaby.testFramework.configure(require('./package.json').jest);
        },
    };
};

