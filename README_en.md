# Vertex🐟

[中文｜Chinese](./README.md)

<div align="center">
  <img src="./logo.png">
</div>

> A front-end scaffolding that supports `Webpack`+`TypeScript`+`React`

## Features🎉

1. It is faster than `create-react-app` and supports more customization and deployment.
2. Starting from `webpack-dev-server`, you can completely use the method of webpack official website to configure.
3. An analysis report is included in the packaged file.
4. By adding `postcss`, the mobile terminal can also be developed quickly.
5. Add `eslint` and `prettier` for code specification.
6. Support `Jest` test.
7. Add `git commmit` detection.
8. Support `mock` test.
9. The packaging process and compiling process beautify.

## Use

1. `npm install vertex -g`

2. `vertex init [projectDirName]`

## Custom configuration

1. devServer (webpack server configuration)
   -Information such as `Proxy` and `Port` can be configured in the `config.js` file under the `config` folder.

2. Custom path configuration
   -The `resolve -> alias` in the `webpack.base.js` file under the `config` folder can be configured.
   -Need to be configured in `compilerOptions -> paths` in `tsconfig.js` in the root directory.

(More custom configurations are waiting for you to discover)...