define('node_modules/react-dom/index', function(require, exports, module) {

  'use strict';
  
  function checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
      return;
    }
    if ('development' !== 'production') {
      // This branch is unreachable because this function is only called
      // in production, but the condition is true only in development.
      // Therefore if the branch is still here, dead code elimination wasn't
      // properly applied.
      // Don't change the message. React DevTools relies on it. Also make sure
      // this message doesn't occur elsewhere in this function, or it will cause
      // a false positive.
      throw new Error('^_^');
    }
    try {
      // Verify that the code above has been dead code eliminated (DCE'd).
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      // DevTools shouldn't crash React, no matter what.
      // We should still report in case we break this code.
      console.error(err);
    }
  }
  
  if ('development' === 'production') {
    // DCE check should happen before ReactDOM bundle executes so that
    // DevTools can report bad minification during injection.
    checkDCE();
    module.exports = require('node_modules/react-dom/cjs/react-dom.production.min');
  } else {
    module.exports = require('node_modules/react-dom/cjs/react-dom.development');
  }

});