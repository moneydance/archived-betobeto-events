const path = require('path')
const makeNodeConfig = require('./base.webpack.node.config')

const makeNodeServerConfig = ({ directory, library }) =>
  makeNodeConfig({
    entry: path.join(directory, 'src/index.ts'),
    output: path.join(directory, 'dist'),
    library,
  })

module.exports = makeNodeServerConfig
