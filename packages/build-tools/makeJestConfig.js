const { pathsToModuleNameMapper } = require('ts-jest/utils')

const makeConfig = ({ rootDir, tsConfigPath }) => {
  const tsconfig = require(tsConfigPath)
  return {
    rootDir,
    testRegex: '\\.spec\\.tsx?$',
    moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths),
    transform: {
      '\\.tsx?$': 'ts-jest',
    },
    moduleDirectories: ['node_modules', 'packages'],
    globals: {
      'ts-jest': {
        compiler: 'ttypescript',
        tsConfig: tsConfigPath,
      },
    },
    setupFiles: ['@betobeto/build-tools/setupJestCucumber'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  }
}

module.exports = makeConfig
