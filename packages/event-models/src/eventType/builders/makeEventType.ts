import { EventType } from '~/eventType/interfaces/EventType'

const defaultEventType: EventType = {
  id: null,
  name: 'hi',
}

export const makeEventType = (eventType: Partial<EventType>): EventType => ({
  ...defaultEventType,
  ...eventType,
})
