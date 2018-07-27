import path from 'path';
import { utils } from '@fiuzagr/boot';

export default context => {
  const { bootSettings, paths, env, app } = context;

  const debugMode = env.DEBUG;
  const web = utils.getSettings(context)(bootSettings, 'webpack.web');
  const processSrcPath = paths.process.src;

  const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  const styleLoader = debugMode ? 'style-loader' : MiniCssExtractPlugin.loader;

  return {
    ...web,

    plugins: [
      // overwrites plugin with local package
      new MiniCssExtractPlugin({
        filename: 'static/style/[name].[hash].css',
        chunkFilename: 'static/style/[id].[hash].css'
      }),
      ...web.plugins
    ],

    resolve: {
      ...web.resolve,

      alias: {
        ...web.resolve.alias,
        '@offline-plugin': path.join(app.paths.root.modules, 'offline-plugin')
      }
    },

    resolveLoader: {
      ...web.resolveLoader,

      modules: [...web.resolveLoader.modules, app.paths.root.modules]
    },

    module: {
      ...web.module,

      rules: [
        ...web.module.rules,

        {
          test: /\.styl/,
          include: [processSrcPath],
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader',
            'stylus-loader'
          ]
        }
      ]
    }
  };
};
