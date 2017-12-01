'use strict';
const path = require('path');

module.exports = appInfo => {
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1511960210420_1008';

	config.middleware = [];

	config.view = {
		root: [
			path.join(appInfo.baseDir, '../dev_files/view'),
			path.join(appInfo.baseDir, 'app/view'),
		].join(','),
		defaultViewEngine: 'nunjucks',
		defaultExtension: '.nj',
		mapping: {
			'.nj': 'nunjucks',
		},
	};

	config.static = {
		dir: path.join(appInfo.baseDir, '../dev_files/public')
	}

	return config;
};