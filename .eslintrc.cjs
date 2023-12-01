module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-plusplus': 'warn',
    'no-param-reassign': 'warn',
    'no-underscore-dangle': 'warn',
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx']
      }
    ]
  }
};
