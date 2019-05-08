import { EventType } from '@betobeto/event-models/lib/eventType/interfaces/EventType'
import { getName } from '@betobeto/event-models/lib/eventType/operators/getName'
import { makeEventType } from '@betobeto/event-models/lib/eventType/builders/makeEventType'
import { Option, fromNullable, none } from 'fp-ts/lib/Option'

import { eventDBPool } from '~/common/pools/eventDBPool'

const QUERY = `
  INSERT INTO event_type (name)
  VALUES ($1)
`

export const insertEvent = (
  eventType: EventType
): Promise<Option<EventType>> => {
  const name = getName(eventType)
  return eventDBPool
    .query(QUERY, [name])
    .then(({ rows: [[id, name]] }) => {
      const eventType = makeEventType({ id, name })
      return fromNullable(eventType)
    })
    .catch(() => none)
}
