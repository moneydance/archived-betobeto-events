import { schemaRegistryFetcher } from '~/schemaRegistry/fetchers/schemaRegistryFetcher'
import { GetSchema } from '~/schemaRegistry/interfaces/GetSchema'

export const getSchema: GetSchema = ({ id }) =>
  schemaRegistryFetcher.get(`/schema/ids/${id}`)
