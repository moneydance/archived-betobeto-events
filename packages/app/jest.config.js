const base = require('../../base.jest.config.js')
const pack = require('./package')

module.exports = {
  ...base,
  displayName: pack.name,
  name: pack.name,
  testMatch: [`<rootDir>/${pack.name}/**/*.spec.js`],
}
