# [pre-me-cli👌](https://github.com/baiziyu-fe/pre-me-cli)  

> `#快速react项目生成器`

![GitHub package.json version](https://img.shields.io/github/package-json/v/baiziyu-fe/pre-me-cli) ![npm](https://img.shields.io/npm/dw/pre-me-cli) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/baiziyu-fe/pre-me-cli) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/baiziyu-fe/pre-me-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/baiziyu-fe/pre-me-cli) ![GitHub language count](https://img.shields.io/github/languages/count/baiziyu-fe/pre-me-cli) ![node-current](https://img.shields.io/node/v/react)


> 一款高度集成的`React`项目生成脚手架，让你不必为安装依赖而烦躁，不必为自定义配置而去反复修改配置文件。
> 目前已经支持以`Webpack`和`Vite`作为项目工具进行启动，支持`Javascript`和`Typescript`。

#### 📎[英文｜English](./README.md)

---

<div  align="center">    
  <img src="./images/logo.png">
</div>

---

## 特点🎉

### 真正的一步到位👏

1. 针对`Webpack模板`的前端项目做了优化和美化，并且加入了打包分析和自定义配置。
2. `Webpack模板`加入`Mock`测试（基于`Koa`），支持`Jest`进行单元测试。
3. 所有模板支持`alias`路径配置、服务器`Proxy`配置、`postcss`、`less`、`eslint`、`prettier`等功能。
4. 所有模板均支持不同开发环境的自定义配置启动。
5. 使用`husky`加入`git commit`检测。
6. 已经加入`React Router Dom`和对应不同语言的支持，提供快速上手`Demo`和预设好的`文件系统管理`。
7. 可以使用`npx`始终保持模板更新或者使用`npm`安装来让你的本地存有你最喜欢的版本。

### 高度的自我修改😯

1. 将所有的可配置项暴露给用户，支持更多的插拔式优化和自定义操作。
2. 为用户提供一个更易上手的项目模板。

## 使用🔧

### 方式一：
   - 全局安装：`npm install pre-me-cli -g`
   - 使用命令创建项目模板：

  ```
     pre-me-cli init [projectName]
     - webpack-ts
     - webpack-js
     - vite-ts
     - vite-js
  ```
### 方式二(可以使你的模板始终保持最新状态)
  - npx安装：`npx pre-me-cli init [projectName]`
  ```
     - webpack-ts
     - webpack-js
     - vite-ts
     - vite-js
  ```
### 启动项目

- 进入项目并安装依赖：`cd projectName` && `yarn`
- 启动项目：`yarn dev` or `npm run dev`


---

#### 非常欢迎你能提供一些可行的建议和帮助，期待你的加入～
