const dotenv = require('dotenv')

// load environment variables
dotenv.config({ path: `${__dirname}/.env` })

module.exports = {
  projects: [
    '<rootDir>/packages/*/jest.unit.config.js',
    '<rootDir>/packages/*/jest.integration.config.js',
  ],
}
