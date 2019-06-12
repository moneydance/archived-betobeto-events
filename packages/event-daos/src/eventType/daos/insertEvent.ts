import { ask, chain, fromTaskEither, map } from 'fp-ts/lib/ReaderTaskEither'
import { tryCatch } from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'

import { makeErrorFactory } from '@betobeto/event-daos/common/builders/makeErrorFactory'
import { PgErrorCodes } from '@betobeto/event-daos/common/enums/PgErrorCodes'
import { PgClientContext } from '@betobeto/event-daos/common/interfaces/PgClientContext'
import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'
import { makeEventType } from '@betobeto/event-models/eventType/builders/makeEventType'
import { EventType } from '@betobeto/event-models/eventType/interfaces/EventType'
import { getName } from '@betobeto/event-models/eventType/operators/getName'

const makeEventTypeWithNameAlreadyExistsError = makeErrorFactory(
  EventTypeErrorCode.EVENT_TYPE_WITH_NAME_ALREADY_EXISTS
)
const makeUnexpectedPostgresError = makeErrorFactory(
  EventTypeErrorCode.UNEXPECTED_POSTGRES_ERROR
)

const QUERY = `
  INSERT INTO event_type (name)
  VALUES ($1)
  RETURNING id, name
`

const handleError = (error: any) => {
  switch (error.code) {
    case PgErrorCodes.UNIQUE_VIOLATION:
      return makeEventTypeWithNameAlreadyExistsError(name)
    default:
      return makeUnexpectedPostgresError(error.code)
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
