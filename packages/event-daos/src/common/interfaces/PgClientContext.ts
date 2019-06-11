import { PoolClient } from 'pg'

export interface PgClientContext {
  pgClient: PoolClient
}
