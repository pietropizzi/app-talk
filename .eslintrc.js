module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "globals": {
      "graphql": true
    },
    "extends": [
      "plugin:react/recommended",
      "eslint:recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
      "react/prop-types": 0,
      "react/display-name": 0,
      "no-console": 0
    }
};
