import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'document',
  fields: [
    defineField({
      name: 'num',
      title: 'Step Number (e.g. 01)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Step Title',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Step Description',
      type: 'text',
    }),
  ],
})
