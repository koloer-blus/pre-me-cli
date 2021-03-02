# pre-me-cli👌

> A front-end scaffolding that supports `Webpack / Vite`+`TypeScript`+`React`. The goal of this scaffolding is to be a one-stop service scaffolding, that is, to provide a common template that can be adapted to most scenarios, and it will support the two packaging modes of `Webpack` and `Vite`, and optimize for the two packaging modes .

 📎[中文｜Chinese](./README_zh.md)

<div align="center">
  <img src="./images/logo.png">
</div>

## Features🎉

### webpack template

1. Compared to `create-react-app`, it is faster and supports more customization and deployment.
2. Starting from `webpack-dev-server`, you can completely use the method of webpack official website to configure, provide package analysis, and provide users with a better one-stop service.
3. An analysis report is included in the packaged file.
4. With the addition of `postcss`, the mobile terminal can also be developed quickly.
5. Add `eslint` and `prettier` for code specification.
6. Support `Jest` test.
7. Add `git commmit` detection.
8. Support `mock` test.
9. The packaging process and compiling process beautify.

### Vite template

1. Provide the use of some common functions and components, and add operations such as `alias` and `proxy`
2. Added support for startup configuration in different modes

## Update content👏

1. Added the `Vite` template, and modified the state that the process is still running after the `Webpack` package is completed
2. Deleted useless files in the `Webpack` template
3. The Vite template is updated to provide two startup states based on `development` and `production`

## Use

1. `npm install pre-me-cli -g`

2. `pre-me-cli init [projectDirName]`
   -`Vite`
   -`Webpack`

## Custom configuration

### webpack template

1. devServer (webpack server configuration)
   -Information such as `Proxy` and `Port` can be configured in the `config.js` file under the `config` folder.

2. Custom path configuration
   -The `resolve -> alias` in the `webpack.base.js` file under the `config` folder can be configured.
   -Need to be configured in `compilerOptions -> paths` in `tsconfig.js` in the root directory.

### Vite template

1. Custom path configuration
   -The `resolve -> alias` in the `base.ts` file under the `config` folder can be configured

(More custom configurations are waiting for you to discover)...
## Remaining problem

1. There is an error in the use of svg under the Vite template
   -Solution: [svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader/issues/434)