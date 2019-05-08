import { EventType } from '~/eventType/interfaces/EventType'

export const getName = ({ name }: EventType): EventType['name'] => name
