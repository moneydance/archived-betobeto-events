import { AxiosPromise } from 'axios'

export type GetSubjectVersions = (args: {
  subject: string
}) => AxiosPromise<number[]>
