define('node_modules/react/index', function(require, exports, module) {

  'use strict';
  
  if ('development' === 'production') {
    module.exports = require('node_modules/react/cjs/react.production.min');
  } else {
    module.exports = require('node_modules/react/cjs/react.development');
  }

});