module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['>= 5% in BR', 'last 2 versions']
        }
      }
    ]
  ]
};
