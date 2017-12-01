exports = (appInfo) => {
	const config = exports = {};

	config.view = {
		root: [
			path.join(appInfo.baseDir, 'app/view')
		].join(','),
	};

	return config;
}