import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'
import { makeErrorFactory } from '@betobeto/event-daos/common/builders/makeErrorFactory'
import { chain, map, ask, fromTaskEither } from 'fp-ts/lib/ReaderTaskEither'
import { tryCatch } from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { PgClientContext } from '@betobeto/event-daos/common/interfaces/PgClientContext'

const QUERY = `
  DROP TABLE event_type
`

const makeQueryError = makeErrorFactory(
  EventTypeErrorCode.EVENT_TYPE_TABLE_DOES_NOT_EXIST
)

export const dropTable = () =>
  pipe(
    ask<PgClientContext>(),
    chain(({ pgClient }) => {
      const query = tryCatch(
        () => pgClient.query(QUERY),
        () => makeQueryError()
      )
      return fromTaskEither(query)
    }),
    map(() => true)
  )
