import { ask, chain, fromTaskEither, map } from 'fp-ts/lib/ReaderTaskEither'
import { tryCatch } from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'

import { makeErrorFactory } from '@betobeto/event-daos/common/builders/makeErrorFactory'
import { PgClientContext } from '@betobeto/event-daos/common/interfaces/PgClientContext'
import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'

const QUERY = `
  DROP TABLE event_type
`

const makeEventTypeTableDoesNotExistError = makeErrorFactory(
  EventTypeErrorCode.EVENT_TYPE_TABLE_DOES_NOT_EXIST
)

export const dropTable = () =>
  pipe(
    ask<PgClientContext>(),
    chain(({ pgClient }) => {
      const query = tryCatch(
        () => pgClient.query(QUERY),
        () => makeEventTypeTableDoesNotExistError()
      )
      return fromTaskEither(query)
    }),
    map(() => true)
  )
