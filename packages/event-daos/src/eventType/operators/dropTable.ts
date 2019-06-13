import { ask, chain, fromTaskEither, map } from 'fp-ts/lib/ReaderTaskEither'
import { tryCatch } from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'

import { PgErrorCodes } from '@betobeto/event-daos/common/enums/PgErrorCodes'
import { PgClientContext } from '@betobeto/event-daos/common/interfaces/PgClientContext'
import { makeEventTypeTableDoesNotExistError } from '@betobeto/event-daos/eventType/builders/makeEventTypeTableDoesNotExistError'
import { makeUnexpectedPgError } from '@betobeto/event-daos/eventType/builders/makeUnexpectedPgError'

const QUERY = `
  DROP TABLE event_type
`
const handleError = (error: any) => {
  switch (error.code) {
    case PgErrorCodes.UNDEFINED_TABLE:
      return makeEventTypeTableDoesNotExistError()
    default:
      return makeUnexpectedPgError(error.code)
  }
}

export const dropTable = () =>
  pipe(
    ask<PgClientContext>(),
    chain(({ pgClient }) => {
      const query = tryCatch(() => pgClient.query(QUERY), handleError)
      return fromTaskEither(query)
    }),
    map(() => true)
  )
