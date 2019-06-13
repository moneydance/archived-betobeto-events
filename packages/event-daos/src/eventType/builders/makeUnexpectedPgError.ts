import { PgErrorCodes } from '@betobeto/event-daos/common/enums/PgErrorCodes'
import { EventTypeErrorCode } from '@betobeto/event-daos/eventType/enums/EventTypeErrorCode'
import { UnexpectedPgError } from '@betobeto/event-daos/eventType/interfaces/UnexpectedPgError'

export const makeUnexpectedPgError = (
  postgresErrorCode: PgErrorCodes
): UnexpectedPgError => ({
  postgresErrorCode,
  type: EventTypeErrorCode.UNEXPECTED_PG_ERROR,
})
