const defaultConfig = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}

module.exports = defaultConfig
