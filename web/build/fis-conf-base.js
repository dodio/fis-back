fis.set('project.ignore', ['node_modules/**', 'output/**', '/build/**', '/package*.json', '/dev_server/**']);
fis.set('project.fileType.text', 'nj, jsx, vue');
fis.require('parser-babel6').parser = require('babel-core');

const fileRequirePlugin = [
	fis.plugin('js-require-css'),
  	fis.plugin('js-require-file', {
    	useEmbedWhenSizeLessThan: 10 * 1024 // 小于10k的图片或文件用base64
  	})
];

const path = require('path');

/**
	配置fis3项目钩子
	主要是commonjs和nodule_modules模块化加载
**/
fis.hook('commonjs', {
  extList: ['.js', '.jsx', '.es', '.ts', '.tsx', '.vue']
})

fis.hook('node_modules')

// server template
fis.match('*.nj', {
    isHtmlLike: true
})

// js compile
fis.match('*.{js,vue:js,html:js,nj:js}', {
	  preprocessor: fileRequirePlugin,
    parser: fis.plugin('babel6', {
        presets: ['es2015', 'stage-3']
    }),
    isMod: true,
    rExt: 'js',
    useSameNameRequire: true
})

fis.match('*.{jsx,html:jsx,nj:jsx}', {
    preprocessor: fileRequirePlugin,
    parser: fis.plugin('babel6', {
        presets: ['es2015', 'stage-3', 'react']
    }),
    isMod: true,
    rExt: 'js',
    useSameNameRequire: true,
})

fis.match('*.{vue:vjsx,html:vjsx,nj:vjsx}', {
    preprocessor: fileRequirePlugin,
    parser: fis.plugin('babel6', {
        presets: ['es2015', 'stage-3', 'react'],
        plugins: ['transform-vue-jsx']
    }),
    isMod: true,
    rExt: 'js',
    useSameNameRequire: true,
})

fis.match('*.vue', {
    parser: fis.plugin('vue-component', {
      // vue@2.x runtimeOnly
      runtimeOnly: true,          // vue@2.x 有runtimeOnly模式，为true时，template会在构建时转为render方法
      // styleNameJoin
      styleNameJoin: '-',          // 样式文件命名连接符 `component-xx-a.css`
      extractCSS: false,           // 是否将css生成新的文件, 如果为false, 则会内联到js中
      // css scoped
      cssScopedIdPrefix: '_v-',   // hash前缀：_v-23j232jj
      cssScopedHashType: 'sum',   // hash生成模式，num：使用`hash-sum`, md5: 使用`fis.util.md5`
      cssScopedHashLength: 8,     // hash 长度，cssScopedHashType为md5时有效
      cssScopedFlag: '__vuec__',  // 兼容旧的ccs scoped模式而存在，此例子会将组件中所有的`__vuec__`替换为 `scoped id`，不需要设为空
    }),
    isMod: true,
    rExt: 'js'
})

fis.match('/node_modules/**.js', {
    isMod: true,
    useSameNameRequire: true
});

fis.match('::package', {
    postpackager: fis.plugin('loader', {
      useInlineMap: true
    })
});

// except mod.js
fis.match('/mod.js', {
    isMod: false,
    parser: false
})
