import { EventType } from '~/eventType/interfaces/EventType'
import { curry } from 'fp-ts/lib/function'

export const setName = curry(
  (name: EventType['name'], eventType: EventType): EventType => ({
    ...eventType,
    name,
  })
)
