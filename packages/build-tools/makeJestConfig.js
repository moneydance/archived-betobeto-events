const { pathsToModuleNameMapper } = require('ts-jest/utils');

const makeConfig = ({ tsConfigPath }) => {
  const tsconfig = require(tsConfigPath);
  return ({
  testRegex: '\\.spec\\.tsx?$',
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths),
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
      tsConfig: tsConfigPath
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
})}

module.exports = makeConfig
