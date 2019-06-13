import { PgErrorCodes } from '@betobeto/event-daos/common/enums/PgErrorCodes'
import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'

export interface UnexpectedPgError {
  type: EventTypeErrorCode.UNEXPECTED_PG_ERROR
  postgresErrorCode: PgErrorCodes
}
