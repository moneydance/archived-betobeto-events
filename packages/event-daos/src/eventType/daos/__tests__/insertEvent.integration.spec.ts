import {
  newEventType,
  createdEventType,
} from '@betobeto/event-daos/eventType/__fixtures__/eventType'
import { createTable } from '@betobeto/event-daos/eventType/daos/createTable'
import { insertEvent } from '@betobeto/event-daos/eventType/daos/insertEvent'
import { dropTable } from '@betobeto/event-daos/eventType/daos/dropTable'
import { eventDBPool } from '@betobeto/event-daos/common/pools/eventDBPool'

beforeEach(createTable)
afterEach(dropTable)
afterAll(() => eventDBPool.end())

it('inserts a new event type succesfully', done => {
  insertEvent(newEventType)
    .then(eventType => {
      expect(eventType.toNullable()).toEqual(createdEventType)
      done()
    })
    .catch(done.fail)
})
