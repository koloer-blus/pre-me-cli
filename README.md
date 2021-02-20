# Vertex🐟

<div  align="center">    
  <img src="./public/logo.png">
</div>

> 一款支持`Webpack`+`TypeScript`+`React`的前端脚手架

## 特点🎉

1. 相比于`create-react-app`速度更快，并且支持更多的自定义和部署。
2. 从`webpack-dev-server`出手，可以完全使用webpack官网的方法进行配置。
3. 打包的文件中带有分析报告。
4. 加入`postcss`，移动端也能快速开发。
5. 加入`eslint`和`prettier`进行代码规范。
6. 支持`Jest`测试。
7. 加入`git commmit`检测。
8. 支持`mock`测试。
9. 打包过程以及编译过程美化。

## 使用

1. 下载代码：
   ```
   git clone git@github.com:baiziyu-fe/Vertex-FE.git
   ```
2. 安装依赖
   ```
   npm install
   //or
   yarn
   ```
3. 启动项目
   ```
   npm run dev
   // or
   yarn dev
   ```
4. 打包项目
   ```
   npm run build
   // or
   yarn build
   ```

## 自定义配置

1. devServer（webpack服务器配置）
   - 在`config`文件夹下的`config.js`文件中可以配置`Proxy`、`Port`等信息。

2. 自定义路径配置
   - 在`config`文件夹下的`webpack.base.js`文件中的`resolve -> alias`可以配置。
   - 需要在根目录下的`tsconfig.js`中的`compilerOptions -> paths`进行配置。

（更多自定义配置等待你去发现）……
