export const eventPoolConfig = {}

import { EventDBConfig } from '~/common/interfaces/EventDBConfig'
import { EventDBConfigEnv } from '~/common/enums/EventDBConfigEnv'
import { get } from 'env-var'

export const eventDBConfig: EventDBConfig = {
  username: get(EventDBConfigEnv.USERNAME)
    .required()
    .asString(),
  password: get(EventDBConfigEnv.PASSWORD)
    .required()
    .asString(),
  host: get(EventDBConfigEnv.HOST)
    .required()
    .asString(),
  port: get(EventDBConfigEnv.PORT)
    .required()
    .asInt(),
  dbName: get(EventDBConfigEnv.DB_NAME)
    .required()
    .asString(),
}
