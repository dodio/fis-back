const config = require('./config');
const express = require('express');
const server = express();
const mockFactory = require('./mock');
const history = require('connect-history-api-fallback');
const nodePath = require('path');

const fileServer = express.static(config.serverDir, {
	cacheControl: false,
	extensions: ['html', 'htm', 'nj'],
	fallthrough: true,
	setHeaders: function(res, path) {
		if(/\.nj$/.test(path)) {
			res.setHeader('Content-Type', 'text/html');
		}
	}
});


if(config.historyApiFallback.rewrites) {
	config.historyApiFallback.rewrites.unshift({
		from: /^\/public\/?.*$/,
        to: function(context) {
            return context.request.url;
        }
	})
}
server.use(history(config.historyApiFallback))
server.use('/', fileServer);
if(config.mock) {
	if(!Array.isArray(config.mock)) {
		config.mock = [config.mock];
	}
	config.mock.forEach(function(mock) {
    	server.use(mockFactory(mock));
	});
}

const proxies = require('./proxy');
if(proxies && proxies.length) {
    server.use(proxies);
}

module.exports = server;
