const makeNodeLibConfig = require('@betobeto/build/base.webpack.node.lib.config')
const pack = require('./package')

const config = makeNodeLibConfig({
  name: pack.name,
  directory: __dirname,
})

module.exports = config
