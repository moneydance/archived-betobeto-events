import { AxiosPromise } from 'axios'

export type GetSubjects = (args: { id: number }) => AxiosPromise<string[]>
