const dotenv = require('dotenv')

// load environment variables
dotenv.config({ path: `${__dirname}/.env` })

const defaultConfig = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '\\.tsx?$': 'ts-jest',
    '\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}

const integration = {
  ...defaultConfig,
  testRegex: '/__tests__/.*.integration.spec.tsx?$',
}

const unit = {
  ...defaultConfig,
  testRegex: '/__tests__/.*.unit.spec.tsx?$',
}

module.exports = {
  integration,
  unit,
}
