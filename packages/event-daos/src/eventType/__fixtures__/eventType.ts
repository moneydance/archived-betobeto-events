import { makeEventType } from '@betobeto/event-models/lib/eventType/builders/makeEventType'

export const newEventType = makeEventType({
  name: 'IssaEvent',
})

export const createdEventType = makeEventType({
  ...newEventType,
  id: 1,
})
