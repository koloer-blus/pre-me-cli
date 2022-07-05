# [pre-me-cli👌](https://github.com/baiziyu-fe/pre-me-cli)  

> `#快速react项目生成器`

![GitHub package.json version](https://img.shields.io/github/package-json/v/baiziyu-fe/pre-me-cli) ![npm](https://img.shields.io/npm/dw/pre-me-cli) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/baiziyu-fe/pre-me-cli) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/baiziyu-fe/pre-me-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/baiziyu-fe/pre-me-cli) ![GitHub language count](https://img.shields.io/github/languages/count/baiziyu-fe/pre-me-cli) ![node-current](https://img.shields.io/node/v/react)


> 一款高度集成的`React`项目生成脚手架，让你不必为安装依赖而烦躁，不必为自定义配置而去反复修改配置文件。
> 目前已经支持以`Webpack`和`Vite`作为项目工具进行启动，支持`Javascript`和`Typescript`。

#### 📎[英文｜English](./README.md)

## 特点🎉

### 真正的一步到位👏

1. 无论是`webpack`还是`react`模板现在都支持`sass`、`less`、`stylus`，依赖安装完成后直接使用；
3. 简化`webpack`模板配置，更新为`webpack5`并使用缓存功能提升二次启动速度；
4. 加入`eslint`进行代码校验和代码的修复；
5. 使用`husky`加入`git commit`检测；
6. 使用`npm run commit`实现规范命令提交；
7. 可以使用`npx`始终保持模板更新或者使用`npm`安装来让你的本地存有你最喜欢的版本。

### 高度的自我修改😯

1. 将所有的可配置项暴露给用户，支持更多的插拔式优化和自定义操作。
2. 为用户提供一个更易上手的项目模板。

## 使用🔧

### 方式一：

   - 全局安装：`npm install pre-me-cli -g`
   - 使用命令创建项目模板：

    创建项目`pre-me-cli init [projectName]`
     - `webpack-ts`：webpack为工具的typescript项目；
     - `webpack-js`：webpack为工具的javascript项目；
     - `vite-ts`：vite为工具的typescript项目；
     - `vite-js`：vite为工具的javascript项目；

### 方式二(可以使你的模板始终保持最新状态)

  - npx安装：`npx pre-me-cli init [projectName]`

     - webpack-ts
     - webpack-js
     - vite-ts
     - vite-js

### 启动项目

- 进入项目并安装依赖：`cd projectName` && `yarn`
- 启动项目：`yarn dev` or `npm run dev`

---

#### 非常欢迎你能提供一些可行的建议和帮助，期待你的加入～
