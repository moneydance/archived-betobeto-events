const defaultConfig = require('./base.jest.config')

const integration = {
  ...defaultConfig,
  testRegex: '/__tests__/.*.integration.spec.tsx?$',
}

module.exports = integration
