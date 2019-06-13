import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'
import { EventTypeTableDoesNotExistError } from '@betobeto/event-daos/eventType/interfaces/EventTypeTableDoesNotExistError'

export const makeEventTypeTableDoesNotExistError = (): EventTypeTableDoesNotExistError => ({
  type: EventTypeErrorCode.EVENT_TYPE_TABLE_DOES_NOT_EXIST,
})
