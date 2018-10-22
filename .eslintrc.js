const ERROR = 2;

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: ['babel', 'import', 'react', 'promise'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  rules: {
    quotes: [
      ERROR,
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ]
  }
};
