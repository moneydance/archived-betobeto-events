export type CommonError<T, P = undefined> = P extends (undefined | null)
  ? { type: T }
  : { type: T; payload: P }
