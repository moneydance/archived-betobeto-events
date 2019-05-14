const defaultConfig = {
  roots: ['<rootDir>/src'],
  modulePathIgnorePatterns: ['dist'],
  moduleNameMapper: {
    '^@betobeto/(.*$/)(.*)': '<rootDir>/../$1src$2',
  },
  transform: {
    '\\.tsx?$': 'ts-jest',
    '\\.jsx?$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}

module.exports = defaultConfig
