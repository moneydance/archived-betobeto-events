import { EventType } from '@betobeto/event-models/eventType/interfaces/EventType'
import { curry } from 'fp-ts/lib/function'

export const setId = curry(
  (id: EventType['id'], eventType: EventType): EventType => ({
    ...eventType,
    id,
  })
)
