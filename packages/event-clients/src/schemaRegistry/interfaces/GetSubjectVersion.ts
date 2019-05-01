import { AxiosPromise } from 'axios'
import { GetSubjectVersionResponse } from './GetSubjectVersionResponse'

export type GetSubjectVersion = (args: {
  subject: string
  version: number
}) => AxiosPromise<GetSubjectVersionResponse>
