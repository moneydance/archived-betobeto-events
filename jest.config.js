const base = require('./base.jest.config.js')

module.exports = {
  ...base,
  projects: ['<rootDir>/packages/*/jest.config.js'],
}
