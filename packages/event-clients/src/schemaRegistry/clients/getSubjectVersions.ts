import { schemaRegistryFetcher } from '~/schemaRegistry/fetchers/schemaRegistryFetcher'
import { GetSubjectVersions } from '~/schemaRegistry/interfaces/GetSubjectVersions'

export const getSubjectVersions: GetSubjectVersions = ({ subject }) =>
  schemaRegistryFetcher.get(`subjects/${subject}/versions`)
