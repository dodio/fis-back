const nodePath = require('path');

module.exports = {
    mock: {
        'urlPattern': '/web-api',
        'dataPath': nodePath.join(__dirname, '../data'),
        'skipNotFound': true
    },
    proxy: {
        // '/web-api': {
        //     target: 'http://xx.xx.xx.xx:nn',
        //     pathRewrite: {
        //         '^/web-api': ''
        //     }
        // }
    },
    historyApiFallback: {
        rewrites: [
            {
                from: /^\/react\/?.*$/,
                to: '/view/react.nj'
            },
            {
                from: /^\/.*$/,
                to: '/view/vue.nj'
            }
        ]
    },

    serverDir: nodePath.join(__dirname, '../../../dev_files')
};
