import { eventDBPool } from '@betobeto/event-daos/common/pools/eventDBPool'

const QUERY = `
  DROP TABLE IF EXISTS event_type
`

export const dropTable = () => eventDBPool.query(QUERY)
