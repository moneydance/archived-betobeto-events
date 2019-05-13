const CleanWebpackPlugin = require('clean-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const makePathTransformer = require('@zerollup/ts-transform-paths')
const WebpackBar = require('webpackbar')
const path = require('path')

const pathTransformer = makePathTransformer()

const makeBaseConfig = ({ entry, output, name, directory }) => {
  const tsconfigPath = path.join(directory, 'tsconfig.json')
  const rootDir = path.join(directory, 'src')
  return {
    name,
    mode: 'development',
    entry,
    output: {
      path: output,
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    },
    resolve: {
      symlinks: false,
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      plugins: [new TsconfigPathsPlugin({ configFile: tsconfigPath })],
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            configFile: tsconfigPath,
            getCustomTransformers: () => ({
              before: [pathTransformer.before],
            }),
            compilerOptions: {
              outDir: output,
              rootDir,
            },
          },
        },
      ],
    },
    stats: 'errors-only',
    plugins: [
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['!**/*.d.ts'],
      }),
      new WebpackBar({ name }),
    ],
  }
}

module.exports = makeBaseConfig
