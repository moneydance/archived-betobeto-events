import { Server } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { execute, subscribe } from 'graphql'
import expressGraphql from 'express-graphql'
import express from 'express'

import schema from '~/schema'

const app = express()

app.use(
  '/api/ql',
  expressGraphql({
    schema,
    graphiql: true,
  })
)

const server: Server = new Server(app)

SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe,
  },
  {
    server,
    path: '/api/ws',
  }
)

server.listen(4000, () => {
  console.log('Server started here -> http://0.0.0.0:4000')
})
