const dotenv = require('dotenv')
const path = require('path')
const makeJestConfig = require('@betobeto/build-tools/makeJestConfig')

// load environment variables
dotenv.config({ path: path.join(__dirname, '.env') })
module.exports = makeJestConfig({
  rootDir: path.join(__dirname, 'packages'),
  tsConfigPath: path.join(__dirname, 'tsconfig.json'),
})
