import { ask, chain, fromTaskEither, map } from 'fp-ts/lib/ReaderTaskEither'
import { tryCatch } from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'

import { makeErrorFactory } from '@betobeto/event-daos/common/builders/makeErrorFactory'
import { PgClientContext } from '@betobeto/event-daos/common/interfaces/PgClientContext'
import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'

const QUERY = `
  CREATE TABLE event_type(
    id SERIAL PRIMARY KEY,
    name VARCHAR (50) UNIQUE NOT NULL
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
