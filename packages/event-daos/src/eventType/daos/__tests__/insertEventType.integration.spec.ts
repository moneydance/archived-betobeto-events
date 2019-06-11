import { loadFeature, defineFeature } from 'jest-cucumber'
import { createTable } from '@betobeto/event-daos/eventType/daos/createTable'
import { dropTable } from '@betobeto/event-daos/eventType/daos/dropTable'
import { eventDBPool } from '@betobeto/event-daos/common/pools/eventDBPool'

const feature = loadFeature('./insertEventType.feature')

afterEach(dropTable)
afterAll(() => eventDBPool.end())

defineFeature(feature, test => {
  test('Create an event type with a unique name', ({ given, when, then }) => {
    given('a table has been initialized', () => {})

    when(/^the dao adds an event type with (.*)$/, arg0 => {})

    then(/^the dao should receive an event type with (.*)$/, arg0 => {})
  })

  test('Create an event type without a unique name', ({
    given,
    and,
    when,
    then,
  }) => {
    given('a table has been initialized', () => {})

    and(/^an event type with name (.*) exist$/, arg0 => {})

    when(/^the dao adds an event type with name (.*)$/, arg0 => {})

    then('the dao should receive an error', () => {})
  })
})
