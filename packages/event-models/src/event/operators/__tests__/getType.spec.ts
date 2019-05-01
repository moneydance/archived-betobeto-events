import { getType } from '~/event/operators/getType'
import { event, eventWithoutType } from '~/event/__fixtures__/event'
import { isNothing } from '@typed/maybe'

describe('getType', () => {
  it('returns the type if there is a type', () => {
    expect(isNothing(getType(event))).toBe(false)
  })

  it("returns nothing if there isn't a type", () => {
    expect(isNothing(getType(eventWithoutType))).toBe(true)
  })
})
