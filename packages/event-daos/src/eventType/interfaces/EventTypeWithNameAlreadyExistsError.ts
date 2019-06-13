import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'

export interface EventTypeWithNameAlreadyExistsError {
  type: EventTypeErrorCode.EVENT_TYPE_WITH_NAME_ALREADY_EXISTS
}
