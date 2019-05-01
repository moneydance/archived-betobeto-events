import { AxiosPromise } from 'axios'
import { PostSubjectVersionResponse } from './PostSubjectVersionResponse'

export type PostSubjectVersion = (args: {
  subject: string
  schema: string
}) => AxiosPromise<PostSubjectVersionResponse>
