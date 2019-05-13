const eventDaosWebpackConfig = require('./packages/event-daos/webpack.config')
const eventModelsWebpackConfig = require('./packages/event-models/webpack.config')

const config = [
  { ...eventDaosWebpackConfig, dependencies: [eventModelsWebpackConfig.name] },
  { ...eventModelsWebpackConfig },
]

module.exports = config
