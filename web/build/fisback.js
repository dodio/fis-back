var Liftoff = require('liftoff');
var argv = require('minimist')(process.argv.slice(2));
var path = require('path');

var cli = new Liftoff({
  name: 'fisback', // 命令名字
  processTitle: 'fisback',
  moduleName: 'fisback',

  // only js supported!
  extensions: {
    '.js': null
  }
});

cli.launch({
  cwd: argv.r || argv.root,
  configPath: argv.f || argv.file
}, function(env) {
  if (argv.server) {
    var port = argv.server;
    delete argv.server; // fis3 do not support this argument
    !argv['child-flag'] && require('../dev_server').listen(port, function() {
      console.log('dev_server started at port:' + port);
    });
  }

  var fis = require('fis3');
  require('./fis-conf');
  // 配置插件查找路径，优先查找本地项目里面的 node_modules
  fis.require.paths.unshift(path.join(env.cwd, 'node_modules'));
  // fis.require.paths.push(path.join(path.dirname(__dirname), 'node_modules'));
  fis.cli.run(argv, env);
});