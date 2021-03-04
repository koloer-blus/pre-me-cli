module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true,
    "jsx-control-statements/jsx-control-statements": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": 'module',
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "globals": {
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-control-statements/recommended",
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": ["react", "jsx-control-statements", "prettier"],
  "rules": {
    "no-unused-vars": "off",
    "prefer-const": 'off',
    "semi": [2, 'always'],
    "no-unused-vars": 0, // 不允许未定义的变量
    "jsx-control-statements/jsx-use-if-tag": 0
  }
};
