import { schemaRegistryFetcher } from '~/schemaRegistry/fetchers/schemaRegistryFetcher'
import { GetSubjects } from '~/schemaRegistry/interfaces/GetSubjects'

export const getSubjects: GetSubjects = () =>
  schemaRegistryFetcher.get('/subjects')
