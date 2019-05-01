import { schemaRegistryFetcher } from '~/schemaRegistry/fetchers/schemaRegistryFetcher'
import { GetSubjectVersion } from '~/schemaRegistry/interfaces/GetSubjectVersion'

export const getSubjectVersion: GetSubjectVersion = ({ subject, version }) =>
  schemaRegistryFetcher.get(`subjects/${subject}/versions/${version}`)
