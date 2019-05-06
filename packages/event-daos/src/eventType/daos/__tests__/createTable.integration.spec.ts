import { createTable } from '~/eventType/daos/createTable'
import { dropTable } from '~/eventType/daos/dropTable'
import { eventDBPool } from '~/common/pools/eventDBPool'

afterEach(dropTable)
afterAll(() => eventDBPool.end())

it('initiates a table succesfully', done => {
  createTable()
    .then(() => done())
    .catch(done.fail)
})
