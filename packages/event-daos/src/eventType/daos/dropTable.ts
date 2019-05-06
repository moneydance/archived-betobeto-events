import { eventDBPool } from '~/common/pools/eventDBPool'

const QUERY = `
  DROP TABLE IF EXISTS event_type
`

export const dropTable = () => eventDBPool.query(QUERY)
