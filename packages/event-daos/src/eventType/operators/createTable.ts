import { ask, chain, fromTaskEither, map } from 'fp-ts/lib/ReaderTaskEither'
import { tryCatch } from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'

import { PgErrorCodes } from '@betobeto/event-daos/common/enums/PgErrorCodes'
import { PgClientContext } from '@betobeto/event-daos/common/interfaces/PgClientContext'
import { makeEventTypeTableExistsError } from '@betobeto/event-daos/eventType/builders/makeEventTypeTableExistsError'
import { makeUnexpectedPgError } from '@betobeto/event-daos/eventType/builders/makeUnexpectedPgError'

const QUERY = `
  CREATE TABLE event_type(
    id SERIAL PRIMARY KEY,
    name VARCHAR (50) UNIQUE NOT NULL
  )
`

const handleError = (error: any) => {
  switch (error.code) {
    case PgErrorCodes.DUPLICATE_TABLE:
      return makeEventTypeTableExistsError()
    default:
      return makeUnexpectedPgError(error.code)
  }
}

export const createTable = () =>
  pipe(
    ask<PgClientContext>(),
    chain(({ pgClient }) => {
      const query = tryCatch(() => pgClient.query(QUERY), handleError)
      return fromTaskEither(query)
    }),
    map(() => true)
  )
