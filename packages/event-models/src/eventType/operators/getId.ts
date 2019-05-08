import { EventType } from '~/eventType/interfaces/EventType'

export const getId = ({ id }: EventType): EventType['id'] => id
