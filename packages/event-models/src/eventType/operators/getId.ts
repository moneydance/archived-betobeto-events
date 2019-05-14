import { EventType } from '@betobeto/event-models/eventType/interfaces/EventType'

export const getId = ({ id }: EventType): EventType['id'] => id
