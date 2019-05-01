import { updateAt, Lens } from '@typed/lenses'
import { always, curry3 } from '@typed/functions'
import { map } from '@typed/maybe'

const _setAt: <A, B>(lens: Lens<A, B>, val: B, obj: A) => A = (
  lens,
  val,
  obj
) => updateAt(lens, map(always(val)))(obj)

export const setAt = curry3(_setAt)
