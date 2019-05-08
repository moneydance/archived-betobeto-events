const makeBaseConfig = require('./base.webpack.config')
const nodeExternals = require('webpack-node-externals')

const makeNodeConfig = ({ entry, output }) => ({
  ...makeBaseConfig({ entry, output }),
  target: 'node',
  externals: [nodeExternals()],
})

module.exports = makeNodeConfig
