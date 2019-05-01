import { setPayload } from '~/event/operators/setPayload'
import { event } from '~/event/__fixtures__/event'

describe('setPayload', () => {
  it('updates an event with the new payload and returns a new event', () => {
    const result = setPayload({}, event)
    expect(result).not.toBe(event)
  })

  it("returns the original event if a payload doesn't exist", () => {
    const result = setPayload(undefined, event)
    expect(result).toBe(event)
  })
})
