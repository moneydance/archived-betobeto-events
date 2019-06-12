import { Pool } from 'pg'

import { eventDbConfig } from '@betobeto/event-daos/common/configs/eventDbConfig'

export const eventDBPool = new Pool({
  user: eventDbConfig.username,
  database: eventDbConfig.dbName,
  password: eventDbConfig.password,
  port: eventDbConfig.port,
})
