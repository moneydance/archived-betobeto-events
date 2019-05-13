const path = require('path')
const makeNodeConfig = require('./base.webpack.node.config')

const makeNodeServerConfig = ({ directory, name }) =>
  makeNodeConfig({
    name,
    directory,
    entry: path.join(directory, 'src/index.ts'),
    output: path.join(directory, 'dist'),
  })

module.exports = makeNodeServerConfig
