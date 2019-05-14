const dotenv = require('dotenv')
const path = require('path')
const makeJestConfig = require('@betobeto/build-tools/makeJestConfig')

// load environment variables
dotenv.config({ path: `${__dirname}/.env` })
const tsConfigPath = path.join(__dirname, 'tsconfig.base.json');

module.exports = makeJestConfig({ tsConfigPath });