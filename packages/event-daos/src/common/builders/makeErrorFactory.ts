import { CommonError } from '@betobeto/event-daos/common/interfaces/CommonError'

export const makeErrorFactory = <T>(type: T) => <P = undefined>(
  payload?: P
): CommonError<T, P> =>
  (payload ? { type } : { type, payload }) as CommonError<T, P>
