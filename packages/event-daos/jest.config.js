const base = require('../../base.jest.config.js')
const pack = require('./package')

module.exports = {
  ...base.integration,
  displayName: pack.name,
  name: pack.name,
}
