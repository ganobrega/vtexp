/**
 * ESLint configuration
 * http://eslint.org/docs/user-guide/configuring
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'promise',
  ],
  rules: {
    // Avoid LF/CRLF on Win/Linux/Mac
    'linebreak-style': 'off',
    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    'no-console': ['error', {
      allow: ['warn', 'error', 'info'],
    }],
    'import/extensions': 'off', // It's default 'off', but breaks on some files
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', 'jsx', '.ts', '.tsx'],
    }],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-danger': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/display-name': 'off',
    'jsx-a11y/label-has-associated-control': [2, {
      required: {
        some: ['nesting', 'id'],
      },
    }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['./'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  globals: {
    chrome: true
  },
};
