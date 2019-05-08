const makeNodeServerConfig = require('@betobeto/build/base.webpack.node.server.config')

const config = makeNodeServerConfig({
  directory: __dirname,
})

module.exports = config
