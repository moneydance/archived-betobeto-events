import { eventDBPool } from '@betobeto/event-daos/common/pools/eventDBPool'

const QUERY = `
  CREATE TABLE event_type(
    id SERIAL PRIMARY KEY,
    name VARCHAR (50) NOT NULL
  )
`

export const createTable = () => eventDBPool.query(QUERY)
