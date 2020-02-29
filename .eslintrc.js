module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "plugin:vue/essential",
    "airbnb-base",
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  // vue 的关键配置
  "plugins":[
    "html",
    "vue",
  ],
  "globals": {
    "wx": true,
    "getApp": true,
    "$":true,
    "Vue":true
  },
  "rules": {
    "arrow-body-style": [0],
    "class-methods-use-this": [0],
    "consistent-return": [0],
    "generator-star-spacing": [0],
    "global-require": [0],
    "import/extensions": [0],
    "import/first": [0],
    "no-param-reassign": [0],
    "no-plusplus": [0],
    "import/no-extraneous-dependencies": [0],
    "import/prefer-default-export": [0],
    "import/no-unresolved": [0],
    "import/no-absolute-path": [0],
    "linebreak-style": [0],
    "no-bitwise": [0],
    "no-cond-assign": [0],
    "no-console": [0],
    "no-debugger": [0],
    "no-else-return": [0],
    "no-nested-ternary": [0],
    "no-restricted-syntax": [0],
    "no-trailing-spaces": [0],
    "no-use-before-define": [0],
    "no-useless-escape": [0],
    "prefer-template": [0],
    "require-yield": [1]
  }
};
