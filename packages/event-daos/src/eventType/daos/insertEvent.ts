import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'
import { makeErrorFactory } from '@betobeto/event-daos/common/builders/makeErrorFactory'
import { chain, map, ask, fromTaskEither } from 'fp-ts/lib/ReaderTaskEither'
import { tryCatch } from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { PgClientContext } from '@betobeto/event-daos/common/interfaces/PgClientContext'
import { makeEventType } from '@betobeto/event-models/eventType/builders/makeEventType'
import { EventType } from '@betobeto/event-models/eventType/interfaces/EventType'
import { getName } from '@betobeto/event-models/eventType/operators/getName'

const makeEventTypeWithNameAlreadyExistsError = makeErrorFactory(
  EventTypeErrorCode.EVENT_TYPE_WITH_NAME_ALREADY_EXISTS
)

const QUERY = `
  INSERT INTO event_type (name)
  VALUES ($1)
  RETURNING id, name
`

export const insertEvent = (eventType: EventType) =>
  pipe(
    ask<PgClientContext>(),
    chain(({ pgClient }) => {
      const name = getName(eventType)
      const query = tryCatch(
        () => pgClient.query(QUERY, [name]),
        () => makeEventTypeWithNameAlreadyExistsError()
      )
      return fromTaskEither(query)
    }),
    map(({ rows: [{ id, name }] }) => makeEventType({ id, name }))
  )
