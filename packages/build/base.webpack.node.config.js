const makeBaseConfig = require('./base.webpack.config')
const nodeExternals = require('webpack-node-externals')

const makeNodeConfig = ({ entry, output, library }) => ({
  ...makeBaseConfig({ entry, output, library }),
  target: 'node',
  externals: [nodeExternals()],
})

module.exports = makeNodeConfig
