import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'
import { makeErrorFactory } from '@betobeto/event-daos/common/builders/makeErrorFactory'
import { chain, map, ask, fromTaskEither } from 'fp-ts/lib/ReaderTaskEither'
import { tryCatch } from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { PgClientContext } from '@betobeto/event-daos/common/interfaces/PgClientContext'

const QUERY = `
  CREATE TABLE event_type(
    id SERIAL PRIMARY KEY,
    name VARCHAR (50) NOT NULL
  )
`

const makeTableExistsError = makeErrorFactory(
  EventTypeErrorCode.EVENT_TYPE_TABLE_EXISTS
)

export const createTable = () =>
  pipe(
    ask<PgClientContext>(),
    chain(({ pgClient }) => {
      const query = tryCatch(
        () => pgClient.query(QUERY),
        () => makeTableExistsError()
      )
      return fromTaskEither(query)
    }),
    map(() => true)
  )
