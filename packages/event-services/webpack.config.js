const makeNodeLibConfig = require('@betobeto/build/base.webpack.node.lib.config')

const config = makeNodeLibConfig({
  directory: __dirname,
})

module.exports = config
