import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'
import { EventTypeWithNameAlreadyExistsError } from '@betobeto/event-daos/eventType/interfaces/EventTypeWithNameAlreadyExistsError'

export const makeEventTypeWithNameAlreadyExistsError = (): EventTypeWithNameAlreadyExistsError => ({
  type: EventTypeErrorCode.EVENT_TYPE_WITH_NAME_ALREADY_EXISTS,
})
