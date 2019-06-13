import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'
import { EventTypeTableExistsError } from '@betobeto/event-daos/eventType/interfaces/EventTypeTableExistsError'

export const makeEventTypeTableExistsError = (): EventTypeTableExistsError => ({
  type: EventTypeErrorCode.EVENT_TYPE_TABLE_EXISTS,
})
