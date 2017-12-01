require.resourceMap({
  "res": {
    "node_modules/vue/dist/vue.runtime.common": {
      "url": "/public/__thirdparty__/vue/dist/vue.runtime.common.js",
      "type": "js"
    },
    "src/data": {
      "url": "/public/data.js",
      "type": "js"
    },
    "src/JsxComponent.vue": {
      "url": "/public/JsxComponent.js",
      "type": "js"
    },
    "src/vueApp.vue": {
      "url": "/public/vueApp.js",
      "type": "js",
      "deps": [
        "src/data",
        "src/JsxComponent.vue",
        "node_modules/vue/dist/vue.runtime.common"
      ]
    }
  },
  "pkg": {}
});