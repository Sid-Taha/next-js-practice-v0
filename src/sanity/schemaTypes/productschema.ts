// schemas/product.js
import type { Rule } from 'sanity'

export const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(0)
    },
    {
      name: 'salePrice',
      title: 'Sale Price',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0)
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'isNew',
      title: 'Is New?',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'isSale',
      title: 'Is On Sale?',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Clothing', value: 'clothing' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Shoes', value: 'shoes' },
          // Extend as needed
        ]
      },
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}
