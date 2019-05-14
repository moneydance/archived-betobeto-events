import { createTable } from '@betobeto/event-daos/eventType/daos/createTable'
import { dropTable } from '@betobeto/event-daos/eventType/daos/dropTable'
import { eventDBPool } from '@betobeto/event-daos/common/pools/eventDBPool'

afterEach(dropTable)
afterAll(() => eventDBPool.end())

it('initiates a table succesfully', done => {
  createTable()
    .then(() => done())
    .catch(done.fail)
})
