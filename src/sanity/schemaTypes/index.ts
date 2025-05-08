import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './productschema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
