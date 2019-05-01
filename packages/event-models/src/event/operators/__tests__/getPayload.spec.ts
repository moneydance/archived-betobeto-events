import { getPayload } from '~/event/operators/getPayload'
import { event, eventWithoutPayload } from '~/event/__fixtures__/event'
import { isNothing } from '@typed/maybe'

describe('getPayload', () => {
  it('returns the payload if there is a payload', () => {
    expect(isNothing(getPayload(event))).toBe(false)
  })

  it("returns nothing if there isn't a payload", () => {
    expect(isNothing(getPayload(eventWithoutPayload))).toBe(true)
  })
})
