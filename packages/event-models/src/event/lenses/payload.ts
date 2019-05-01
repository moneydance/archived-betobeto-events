import { Event } from '~/event/interfaces/Event'
import { lens } from '@typed/lenses'
import { prop, set } from '@typed/objects'

export const payload = lens<Event, Event['payload']>(
  prop('payload'),
  set('payload')
)
