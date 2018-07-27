import path from 'path';

export default context => ({
  app: {
    paths: {
      root: {
        modules: path.resolve(context.paths.process.root, '../../node_modules')
      }
    }
  }
});
