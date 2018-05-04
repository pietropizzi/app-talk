module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
      "graphql": true
    },
    "extends": [
      "plugin:react/recommended",
      "eslint:recommended"
    ],
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
      "react/display-name": 0
    }
};
