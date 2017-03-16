# web-project-template-angular
angular+webpack项目脚手架

本工程为基于angular框架的前端项目开发脚手架，其特点如下：

* 使用angular1（angular@1.6.2）作为项目主框架，并包含jQuery（jquery@3.1.1）、bootstrap库作为辅助工具
* 使用bootstrap-sass（bootstrap-sass@3.3.7）作为css框架，可以覆盖bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss文件中的默认配置，从而自定义样式
* 整合angular-ui-router作为路由管理
* 整合font-awesome开源图标库
* 使用webpack2（webpack@2.2.1）前端模块化开发工具作为项目自动化构建与开发工具
* 使用webpack-dev-server作为开发过程工具（热替换HMR）
* 分别使用webpack.config.js与webpack.production.config.js两个webpack配置文件作为项目在开发环境中的配置和项目在生产环境中的配置

使用方法：

1. fork再clone，或直接clone，或直接下载
2. 打开文件所在目录，打开命令行工具至项目所在目录`npm install`安装依赖（国内的同志建议将npm的模块下载域名配置为淘宝镜像域名，或安装cnpm，**node-sass在国内只能使用cnpm下载安装，否则报错。建议先`cnpm install node-sass --save-dev`，再`npm install`**）
3. 命令行运行`npm start`，开启开发模式，命令行运行`npm run build`，生成生产环境部署文件

开始你的angular1模块化开发之旅:)
