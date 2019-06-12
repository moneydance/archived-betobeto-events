import { get } from 'env-var'

import { EventDbConfigEnv } from '@betobeto/event-daos/common/enums/EventDbConfigEnv'
import { EventDbConfig } from '@betobeto/event-daos/common/interfaces/EventDbConfig'

export const eventDbConfig: EventDbConfig = {
  username: get(EventDbConfigEnv.USERNAME)
    .required()
    .asString(),
  password: get(EventDbConfigEnv.PASSWORD)
    .required()
    .asString(),
  host: get(EventDbConfigEnv.HOST)
    .required()
    .asString(),
  port: get(EventDbConfigEnv.PORT)
    .required()
    .asInt(),
  dbName: get(EventDbConfigEnv.DB_NAME)
    .required()
    .asString(),
}
