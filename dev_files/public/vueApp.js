define('src/vueApp.vue', function(require, exports, module) {

  'use strict';
  
  var something = require('src/data');
  var JsxComponent = require('src/JsxComponent.vue');
  module.exports = {
  	name: 'app',
  	data: function data() {
  		return {
  			counter: 0,
  			data: something.data
  		};
  	},
  	created: function created() {
  		var _this = this;
  
  		setInterval(function () {
  			_this.counter += 1;
  		}, 1e3);
  	},
  
  	components: {
  		JsxComponent: require('node_modules/vue/dist/vue.runtime.common').extend(JsxComponent)
  	}
  };
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("this is a vue app")]),_vm._v(" "),_c('div',[_vm._v("i counted for "+_vm._s(_vm.counter)+" times.")]),_vm._v(" "),_c('div',{staticClass:"fromData"},[_vm._v("from data: "+_vm._s(_vm.data))]),_vm._v(" "),_c('jsx-component')],1)}
  __vue__options__.staticRenderFns =[]
  __vue__options__._scopeId = "_v-52eaf222"
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.fromData[_v-52eaf222] {\n\tfont-weight: bold;\n\tcolor: #374832;\n}\n");
  

});
