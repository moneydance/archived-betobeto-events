import { payload } from '~/event/lenses/payload'
import { setAt } from '~/utils/setAt'

export const setPayload = setAt(payload)
