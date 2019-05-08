const base = require('@betobeto/build/base.jest.integration.config')
const pack = require('./package')

module.exports = {
  ...base,
  displayName: pack.name,
  name: pack.name,
}
