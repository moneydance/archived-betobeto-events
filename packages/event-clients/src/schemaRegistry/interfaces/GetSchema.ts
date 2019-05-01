import { AxiosPromise } from 'axios'
import { GetSchemaResponse } from './GetSchemaResponse'

export type GetSchema = (args: {
  id: number
}) => AxiosPromise<GetSchemaResponse>
