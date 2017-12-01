const devFis = fis.media('develope');
const path = require('path');

devFis.match('/src/(**)', {
	release: '/public/$1'
})

devFis.match('/share/(**)', {
    release: '/public/$1'
});

devFis.match('/node_modules/(**.js)', {
    release: '/public/__thirdparty__/$1'
});

devFis.match('/*.js', {
    release: '/public/$0'
})

// server code
devFis.match('/src/(*.nj)', {
    release: '/view/$1'
});

devFis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: path.resolve(__dirname, '../../dev_files')
    })
})
