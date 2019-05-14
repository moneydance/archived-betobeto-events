const base = require('@betobeto/build-tools/base.jest.unit.config')
const pack = require('./package')

module.exports = {
  ...base,
  displayName: pack.name,
  name: pack.name,
}
