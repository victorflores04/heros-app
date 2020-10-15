const path = require('path')
const HtmlWebPackPlugin= require('html-webpack-plugin');

module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                rules:[
                    {
                        test: /\.css$/,
                        use: [
                            'style-loader',
                            {
                                loader:'css-loader',
                                options: {importLoaders: 1}
                            },
                            'postcss-loader',
                        ]
                    }
                ]
            },
            {
                rules: [
                    {
                      test: /\.(png|PNG|JPG|jpg|svg)$/,
                      use: [
                        {
                          loader: 'file-loader',
                          options: { name: 'assets/[hash].[ext]' },
                        }
                      ],
                    },
                  ],
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
    ]
};