const path = require('path');


module.exports = {
    entry: './src/index,js',
    output: {
        path: path.resolve(__dirnamem, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [',js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js\jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress:true,
        port:3006,
        open:true,
    }
}