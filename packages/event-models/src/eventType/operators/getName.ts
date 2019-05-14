import { EventType } from '@betobeto/event-models/eventType/interfaces/EventType'

export const getName = ({ name }: EventType): EventType['name'] => name
