import { map, mapLeft, Either } from 'fp-ts/lib/Either'
import { run } from 'fp-ts/lib/ReaderTaskEither'
import { constVoid as noop } from 'fp-ts/lib/function'
import { pipe } from 'fp-ts/lib/pipeable'
import { defineFeature, loadFeature } from 'jest-cucumber'

import { PgClientContext } from '@betobeto/event-daos/common/interfaces/PgClientContext'
import { eventDBPool } from '@betobeto/event-daos/common/pools/eventDBPool'
import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'
import { EventTypeTableExistsError } from '@betobeto/event-daos/eventType/interfaces/EventTypeTableExistsError'
import { UnexpectedPgError } from '@betobeto/event-daos/eventType/interfaces/UnexpectedPgError'
import { createTable } from '@betobeto/event-daos/eventType/operators/createTable'
import { dropTable } from '@betobeto/event-daos/eventType/operators/dropTable'

const feature = loadFeature('./createTable.feature')

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

  test("Create a table when it doesn't exist", ({ given, when, then }) => {
    let result: Either<unknown, Boolean>
    given("a table hasn't been initialized", noop)
    when('the dao creates a table', async () => {
      result = await run(createTable(), context)
    })
    then('the table should be created', async () =>
      pipe(
        result,
        map(value => expect(value).toBe(true)),
        mapLeft(fail)
      )
    )
  })

  test('Create a table when it does exist', ({ given, when, then }) => {
    let result: Either<EventTypeTableExistsError | UnexpectedPgError, unknown>
    given(
      'a table has been initialized',
      async () => await run(createTable(), context)
    )
    when('the dao creates a table', async () => {
      result = await run(createTable(), context)
    })
    then('the dao should receive an error', async () =>
      pipe(
        result,
        map(fail),
        mapLeft(error =>
          expect(error.type).toBe(EventTypeErrorCode.EVENT_TYPE_TABLE_EXISTS)
        )
      )
    )
  })
})
