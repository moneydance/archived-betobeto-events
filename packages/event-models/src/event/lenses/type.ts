import { Event } from '~/event/interfaces/Event'
import { lens } from '@typed/lenses'
import { prop, set } from '@typed/objects'

export const type = lens<Event, Event['type']>(prop('type'), set('type'))
