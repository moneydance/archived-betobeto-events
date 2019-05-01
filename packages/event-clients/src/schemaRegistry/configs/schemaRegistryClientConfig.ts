import { SchemaRegistryClientConfig } from '~/schemaRegistry/interfaces/SchemaRegistryClientConfig'
import { SchemaRegistryClientEnv } from '~/schemaRegistry/enums/SchemaRegistryClientEnv'
import { get } from 'env-var'

export const schemaRegistryClientConfig: SchemaRegistryClientConfig = {
  username: get(SchemaRegistryClientEnv.USERNAME)
    .required()
    .asString(),
  password: get(SchemaRegistryClientEnv.PASSWORD)
    .required()
    .asString(),
  uri: get(SchemaRegistryClientEnv.URI)
    .required()
    .asUrlString(),
}
