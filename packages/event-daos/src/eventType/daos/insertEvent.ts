import { eventDBPool } from '~/common/pools/eventDBPool'

const QUERY = `
  INSERT INTO event_type (name)
  VALUES ($1)
`

export const createEvent = (name: string) => eventDBPool.query(QUERY, [name])
