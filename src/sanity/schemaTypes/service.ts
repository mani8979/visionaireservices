import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Service ID (e.g. 01)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'link',
      title: 'Link URL',
      type: 'string',
    }),
  ],
})
