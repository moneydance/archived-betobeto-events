import { map, mapLeft, Either } from 'fp-ts/lib/Either'
import { run } from 'fp-ts/lib/ReaderTaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { defineFeature, loadFeature } from 'jest-cucumber'

import { PgClientContext } from '@betobeto/event-daos/common/interfaces/PgClientContext'
import { eventDBPool } from '@betobeto/event-daos/common/pools/eventDBPool'
import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'
import { EventTypeWithNameAlreadyExistsError } from '@betobeto/event-daos/eventType/interfaces/EventTypeWithNameAlreadyExistsError'
import { UnexpectedPgError } from '@betobeto/event-daos/eventType/interfaces/UnexpectedPgError'
import { createTable } from '@betobeto/event-daos/eventType/operators/createTable'
import { dropTable } from '@betobeto/event-daos/eventType/operators/dropTable'
import { insertEvent } from '@betobeto/event-daos/eventType/operators/insertEvent'
import { makeEventType } from '@betobeto/event-models/eventType/builders/makeEventType'
import { EventType } from '@betobeto/event-models/eventType/interfaces/EventType'
import { getId } from '@betobeto/event-models/eventType/operators/getId'
import { getName } from '@betobeto/event-models/eventType/operators/getName'

const feature = loadFeature('./insertEventType.feature')

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

  test('Create an event type with a unique name', ({ given, when, then }) => {
    let result: Either<unknown, EventType>
    given(
      'a table has been initialized',
      async () => await run(createTable(), context)
    )
    when(/^the dao adds an event type with (.*)$/, async name => {
      const eventType = makeEventType({ name })
      result = await run(insertEvent(eventType), context)
    })
    then(/^the dao should receive an event type with (.*)$/, name =>
      pipe(
        result,
        map(value => {
          const resultName = getName(value)
          const resultId = getId(value)
          expect(resultName).toBe(name)
          expect(resultId).not.toBeNull()
        }),
        mapLeft(fail)
      )
    )
  })

  test('Create an event type without a unique name', ({
    given,
    and,
    when,
    then,
  }) => {
    let result: Either<
      EventTypeWithNameAlreadyExistsError | UnexpectedPgError,
      unknown
    >
    given(
      'a table has been initialized',
      async () => await run(createTable(), context)
    )
    and(/^an event type with name (.*) exist$/, async name => {
      const eventType = makeEventType({ name })
      await run(insertEvent(eventType), context)
    })
    when(/^the dao adds an event type with name (.*)$/, async name => {
      const eventType = makeEventType({ name })
      result = await run(insertEvent(eventType), context)
    })
    then(
      /^the dao should receive an error explaining that an event with (.*) already exists$/,
      name =>
        pipe(
          result,
          mapLeft(error => {
            expect(error.type).toBe(
              EventTypeErrorCode.EVENT_TYPE_WITH_NAME_ALREADY_EXISTS
            )
          }),
          map(fail)
        )
    )
  })
})
