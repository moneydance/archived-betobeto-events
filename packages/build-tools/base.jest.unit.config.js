const defaultConfig = require('./base.jest.config')

const unit = {
  ...defaultConfig,
  testRegex: '/__tests__/.*.unit.spec.tsx?$',
}

module.exports = unit
