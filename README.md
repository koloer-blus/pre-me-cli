# [pre-me-cli👌](https://github.com/baiziyu-fe/pre-me-cli)

> `#quick react project generator`

![GitHub package.json version](https://img.shields.io/github/package-json/v/baiziyu-fe/pre-me-cli) ![npm](https://img.shields. io/npm/dw/pre-me-cli) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/baiziyu-fe/pre-me-cli) ! [GitHub commit activity](https://img.shields.io/github/commit-activity/w/baiziyu-fe/pre-me-cli) ![GitHub last commit](https://img.shields.io /github/last-commit/baiziyu-fe/pre-me-cli) ![GitHub language count](https://img.shields.io/github/languages/count/baiziyu-fe/pre-me-cli) ![node-current](https://img.shields.io/node/v/react)


> A highly integrated `React` project generation scaffold, so that you don't have to worry about installing dependencies, and you don't have to repeatedly modify configuration files for custom configuration.
> Currently, `Webpack` and `Vite` are supported as project tools to start, and `Javascript` and `Typescript` are supported.

#### 📎[中文｜Chinese](./README_zh.md)

## Features 🎉

### Really one step in place 👏

1. Both `webpack` and `react` templates now support `sass`, `less`, `stylus`, which can be used directly after the installation is completed;
3. Simplify the `webpack` template configuration, update it to `webpack5` and use the cache function to improve the secondary startup speed;
4. Add `eslint` for code verification and code repair;
5. Use `husky` to add `git commit` detection;
6. Use `npm run commit` to implement canonical command submission;
7. Use `npx` to always keep templates updated or install with `npm` to keep your favorite version in your local repository.

### Highly self-modifying 😯

1. Expose all configurable items to users to support more pluggable optimization and custom operations.
2. Provide users with an easier-to-use project template.

## use 🔧

### method one:

   - Install globally: `npm install pre-me-cli -g`
   - Create a project template with the command:

    Create project `pre-me-cli init [projectName]`
     - `webpack-ts`: typescript project with webpack as a tool;
     - `webpack-js`: javascript project with webpack as a tool;
     - `vite-ts`: vite is a typescript project for tools;
     - `vite-js`: a javascript project with vite as a tool;

### Method 2 (to keep your templates always up to date)

  - npx install: `npx pre-me-cli init [projectName]`

     - webpack-ts
     - webpack-js
     - vite-ts
     - vite-js

### Startup project

- Enter the project and install dependencies: `cd projectName` && `yarn`
- Start the project: `yarn dev` or `npm run dev`

---

#### You are very welcome to provide some feasible suggestions and help, and look forward to your joining~