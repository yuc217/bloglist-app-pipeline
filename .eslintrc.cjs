module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    'node': true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "settings": { react: { version: '18.2' } },
  "plugins": [
    "react"
  ],
  "rules": {
    "linebreak-style": [
      "error",
      "unix"
    ],

    "semi": [
      "error",
      "never"
    ],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    "no-console": 0,
    'no-unused-vars': 'off',
    "react/prop-types": 0
  }
}