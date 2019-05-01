import { Pool } from 'pg'
import { eventDBConfig } from '~/common/configs/eventDBConfig'

export const eventDBPool = new Pool({
  user: eventDBConfig.username,
  database: eventDBConfig.dbName,
  password: eventDBConfig.password,
  port: eventDBConfig.port,
})
