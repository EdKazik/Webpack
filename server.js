const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackDev = require('./webpack.dev.js');

const compiler = Webpack(webpackDev);
const devServerOptions = { ...webpackDev.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
    console.log('Starting server...');
    await server.start();
};

runServer();
