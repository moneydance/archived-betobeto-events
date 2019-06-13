import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'

export interface EventTypeTableExistsError {
  type: EventTypeErrorCode.EVENT_TYPE_TABLE_EXISTS
}
