import { ask, chain, fromTaskEither, map } from 'fp-ts/lib/ReaderTaskEither'
import { tryCatch } from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'

import { PgErrorCodes } from '@betobeto/event-daos/common/enums/PgErrorCodes'
import { PgClientContext } from '@betobeto/event-daos/common/interfaces/PgClientContext'
import { makeEventTypeWithNameAlreadyExistsError } from '@betobeto/event-daos/eventType/builders/makeEventTypeWithNameAlreadyExistsError'
import { makeUnexpectedPgError } from '@betobeto/event-daos/eventType/builders/makeUnexpectedPgError'
import { makeEventType } from '@betobeto/event-models/eventType/builders/makeEventType'
import { EventType } from '@betobeto/event-models/eventType/interfaces/EventType'
import { getName } from '@betobeto/event-models/eventType/operators/getName'

const QUERY = `
  INSERT INTO event_type (name)
  VALUES ($1)
  RETURNING id, name
`

const handleError = (error: any) => {
  switch (error.code) {
    case PgErrorCodes.UNIQUE_VIOLATION:
      return makeEventTypeWithNameAlreadyExistsError()
    default:
      return makeUnexpectedPgError(error.code)
  }
}

export const insertEvent = (eventType: EventType) =>
  pipe(
    ask<PgClientContext>(),
    chain(({ pgClient }) => {
      const name = getName(eventType)
      const query = tryCatch(() => pgClient.query(QUERY, [name]), handleError)
      return fromTaskEither(query)
    }),
    map(({ rows: [{ id, name }] }) => makeEventType({ id, name }))
  )
