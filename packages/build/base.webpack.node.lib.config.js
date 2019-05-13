const makeNodeConfig = require('./base.webpack.node.config')
const path = require('path')
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin')

const makeNodeLibConfig = ({ directory, name }) => {
  const nodeConfig = makeNodeConfig({
    name,
    directory,
    entry: WebpackWatchedGlobEntries.getEntries(
      path.resolve(directory, 'src/**/*.ts'),
      {
        ignore: ['**/__tests__/**/*.ts', '**/__fixtures__/**/*.ts'],
      }
    ),
    output: path.join(directory, 'lib'),
  })
  return {
    ...nodeConfig,
    plugins: [...nodeConfig.plugins, new WebpackWatchedGlobEntries()],
  }
}

module.exports = makeNodeLibConfig
