import { schemaRegistryFetcher } from '~/schemaRegistry/fetchers/schemaRegistryFetcher'
import { PostSubjectVersion } from '~/schemaRegistry/interfaces/PostSubjectVersion'

export const postSubjectVersion: PostSubjectVersion = ({ subject, schema }) =>
  schemaRegistryFetcher.post(`subjects/${subject}/versions`, { schema })
