# node 全栈开发脚手架
一个人搞自己项目的时候的一个总体目录规范框架

# 使用
下载master回去解压

启动eggjs 的服务器，服务端在这里开发
```
cd server
npm install
npm run dev
```

启动浏览器端的编译开发
```
cd web
npm install
npm run dev
```


只想使用纯浏览器端的脚手架，就拷贝web目录出来用
并使用这些命令，启动浏览器端的编译和开发服务器
```
cd web
npm install
npm run devServer
```

当然你可能需要手动修改下 web目录中的开发模式下的编译文件目录，在build/fis-conf-dev, dev_server/config/default.js

## 目录规范

* dev_files

浏览器端开发时构建的临时文件存放地，浏览器的文件分为由服务器端渲染文件和静态资源文件，开发模式时，server会加载其中的 public 和 view

* server 

这个是eggjs 的标准目录，可以配置一个加载器loader，用来加载 web里的share 文件夹内容。
从而可以同步共享部分 服务器 与 浏览器共同的代码

* web

基于fis3搭建的，浏览器前端框架
支持多入口
vue单文件组件
react
es2015
可与node服务器同步一起开发
也可以单独作为纯前端项目开发（含mock数据功能，代理后端接口功能）
liveload 自动刷新