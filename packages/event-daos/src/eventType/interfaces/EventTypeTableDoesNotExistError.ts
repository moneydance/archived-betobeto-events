import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'

export interface EventTypeTableDoesNotExistError {
  type: EventTypeErrorCode.EVENT_TYPE_TABLE_DOES_NOT_EXIST
}
