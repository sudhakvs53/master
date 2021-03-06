module.exports = {
  "parser": "babel-eslint",
  "extends": [ 
     "eslint-config-airbnb",
     "plugin:flowtype/recommended"
    ],  
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "plugins": [
    "react",
    "flowtype",
    "import"
  ],
  "globals": {
    "define": true
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    },
    'import/resolver': {
      "webpack": {
        config: "config/webpack.config.development.js"
      }
    }    
  },
  "rules": {
    "react/jsx-quotes": 0,
    "react/wrap-multilines'": 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.js'] }],
    "no-shadow": [2, {"builtinGlobals": false, "hoist": "functions", "allow": []}],
    "no-param-reassign": [2,{ "props": false }],
    "max-len" :[2, {"code": 120, "tabWidth": 4, "ignoreUrls": true}],
    "global-require": 0,
    "linebreak-style": [0, "LF"]
  }
};
