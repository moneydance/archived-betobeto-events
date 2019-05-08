const makeNodeConfig = require('./base.webpack.node.config')
const path = require('path')
const globby = require('globby')

const removeExtension = filePath =>
  filePath.slice(0, -path.extname(filePath).length)

const removeRoot = filePath => {
  const [, ...rest] = filePath.split(path.sep)
  return path.join(...rest)
}

const formatEntryKey = key => removeExtension(removeRoot(key))

const makeEntry = (entry, directory) =>
  globby
    .sync(entry, { cwd: directory })
    .reduce((acc, curr) => ({ ...acc, [formatEntryKey(curr)]: curr }), {})

const glob = [
  'src/**/*.ts',
  '!src/**/__tests__/**/*.ts',
  '!src/**/__fixtures__/**/*.ts',
]

const makeNodeLibConfig = ({ directory, library }) =>
  makeNodeConfig({
    entry: makeEntry(glob, directory),
    output: path.join(directory, 'lib'),
    library,
  })

module.exports = makeNodeLibConfig
