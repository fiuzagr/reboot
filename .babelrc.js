module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['>= 5% in BR', 'last 2 versions']
        }
      }
    ],
    '@babel/preset-react'
  ]
};
