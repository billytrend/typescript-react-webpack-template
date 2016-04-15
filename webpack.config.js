module.exports = {
    entry: './src/js/index.tsx',
    output: {
        path: './bin/',
        filename: 'build.js'
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    },
    devtool: 'source-map',
    module: {
        loaders: [
            //{
            //    test: /\.scss$/,
            //    include: /src/,
            //    loaders: [
            //        'style',
            //        'css',
            //        'autoprefixer?browsers=last 3 versions',
            //        'sass?outputStyle=expanded'
            //    ]
            //},
            {
                test: /\.(tsx|ts)$/,
                loaders: [
                    'ts-loader'
                ]
            }
        ]
    }
};
