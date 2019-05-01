import { makeFetcher } from '~/fetcher/builders/makeFetcher'
import { schemaRegistryClientConfig } from '~/schemaRegistry/configs/schemaRegistryClientConfig'

const { uri, username, password } = schemaRegistryClientConfig

export const schemaRegistryFetcher = makeFetcher({
  baseURL: uri,
  auth: {
    username,
    password,
  },
})
