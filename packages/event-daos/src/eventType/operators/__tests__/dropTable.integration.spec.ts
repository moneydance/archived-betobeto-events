import { map, mapLeft, Either } from 'fp-ts/lib/Either'
import { run } from 'fp-ts/lib/ReaderTaskEither'
import { constVoid as noop } from 'fp-ts/lib/function'
import { pipe } from 'fp-ts/lib/pipeable'
import { defineFeature, loadFeature } from 'jest-cucumber'

import { PgClientContext } from '@betobeto/event-daos/common/interfaces/PgClientContext'
import { eventDBPool } from '@betobeto/event-daos/common/pools/eventDBPool'
import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'
import { EventTypeTableDoesNotExistError } from '@betobeto/event-daos/eventType/interfaces/EventTypeTableDoesNotExistError'
import { UnexpectedPgError } from '@betobeto/event-daos/eventType/interfaces/UnexpectedPgError'
import { createTable } from '@betobeto/event-daos/eventType/operators/createTable'
import { dropTable } from '@betobeto/event-daos/eventType/operators/dropTable'

const feature = loadFeature('./dropTable.feature')

defineFeature(feature, test => {
  let context: PgClientContext
  beforeAll(async () => {
    const pgClient = await eventDBPool.connect()
    context = { pgClient }
  })
  afterAll(async () => {
    context.pgClient.release()
    await eventDBPool.end()
  })
  afterEach(async () => await run(dropTable(), context))
  test('Drop a table when it does exist', ({ given, when, then }) => {
    let result: Either<unknown, Boolean>
    given(
      'a table has been initialized',
      async () => await run(createTable(), context)
    )
    when('the dao drops a table', async () => {
      result = await run(dropTable(), context)
    })
    then('the table should be dropped', () =>
      pipe(
        result,
        map(value => expect(value).toBe(true)),
        mapLeft(fail)
      )
    )
  })
  test("Drop a table when it doesn't exist", ({ given, when, then }) => {
    let result: Either<
      EventTypeTableDoesNotExistError | UnexpectedPgError,
      unknown
    >
    given("a table hasn't been initialized", () => noop)
    when('the dao drops a table', async () => {
      result = await run(dropTable(), context)
    })
    then('the dao should receive an error', () =>
      pipe(
        result,
        mapLeft(value =>
          expect(value.type).toBe(
            EventTypeErrorCode.EVENT_TYPE_TABLE_DOES_NOT_EXIST
          )
        ),
        map(fail)
      )
    )
  })
})
