import { Event } from '~/event/interfaces/Event'

export const event: Event = {
  type: 'ANSWERED_MEANING_OF_LIFE',
  payload: {
    answer: 42,
  },
}

export const eventWithoutPayload: Event = {
  type: 'ANSWERED_MEANING_OF_LIFE',
  payload: undefined,
}

export const eventWithoutType: Partial<Event> = {
  type: undefined,
  payload: {
    answer: 42,
  },
}
