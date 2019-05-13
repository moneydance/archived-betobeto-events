const makeBaseConfig = require('./base.webpack.config')
const nodeExternals = require('webpack-node-externals')

const makeNodeConfig = ({ entry, output, name, directory }) => ({
  ...makeBaseConfig({ entry, output, name, directory }),
  target: 'node',
  externals: [nodeExternals()],
})

module.exports = makeNodeConfig
