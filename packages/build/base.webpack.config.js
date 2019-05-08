const CleanWebpackPlugin = require('clean-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const makePathTransformer = require('@zerollup/ts-transform-paths')

const pathTransformer = makePathTransformer()

const makeBaseConfig = ({ entry, output, library }) => {
  return {
    mode: 'development',
    entry: entry,
    output: {
      path: output,
      filename: '[name].js',
    },
    resolve: {
      symlinks: false,
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      plugins: [new TsconfigPathsPlugin()],
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({
              before: [pathTransformer.before],
            }),
            compilerOptions: {
              outDir: output,
            },
          },
        },
      ],
    },
    plugins: [new CleanWebpackPlugin()],
  }
}

module.exports = makeBaseConfig
