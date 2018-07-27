const ERROR = 2;

module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended'],
  plugins: ['babel', 'import', 'react', 'promise'],
  rules: {
    quotes: [
      ERROR,
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ]
  }
};
