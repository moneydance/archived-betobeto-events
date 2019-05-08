import {
  newEventType,
  createdEventType,
} from '~/eventType/__fixtures__/eventType'
import { createTable } from '~/eventType/daos/createTable'
import { insertEvent } from '~/eventType/daos/insertEvent'
import { dropTable } from '~/eventType/daos/dropTable'
import { eventDBPool } from '~/common/pools/eventDBPool'

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
