//Konfiguracja Webpack

module.exports = {
    entry: "./components/Index.jsx",
    output: { filename: "./components/out.js" },
    watch: true,
    module: {
        loaders: [ {
            test: /\.jsx$/, exclude: /node_modules/,
            loader: 'babel-loader'
            ,
            query: { presets: ['es2015', 'stage-2', 'react'] }
        }
        ]
    }
};