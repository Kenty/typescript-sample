var path =require('path');

module.exports = {
    entry: {
        app: './app/app.ts'
    },
    output: {
        path: require('path').resolve('./dist/js/'),
        filename: '[name].js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        alias: {}
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                exclude: /(node_modules)/,
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    }
}
