import { setType } from '~/event/operators/setType'
import { event } from '~/event/__fixtures__/event'

describe('setType', () => {
  it('updates an event with the new type and returns a new event', () => {
    const result = setType('DOPER_TYPE', event)
    expect(result).not.toBe(event)
  })

  it("returns the original event if a type doesn't exist", () => {
    const result = setType(undefined, event)
    expect(result).toBe(event)
  })
})
