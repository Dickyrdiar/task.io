module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es2021": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended', 
        'plugin:prettier/recommended',
        'plugin:sonarjs/recommended',
        'plugin:unicorn/recommended',
        'plugin:security/recommended',
        'plugin:react-hooks/recommended'
    ],
    "parserOptions": {
        "ecmaVersion": 2020, 
        "sourceType": 'module',
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "settings": {
        "react": {
          "version": 'detect'
        }
      },
    "plugins": [
        "react",
        'simple-import-sort'
    ],
    "rules": {
        'no-console': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'simple-import-sort/sort': 'error',
        'unicorn/filename-case': 'off'
    }
};
