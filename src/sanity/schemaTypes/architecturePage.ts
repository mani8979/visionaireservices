import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'architecturePage',
  title: 'Architecture Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
    }),
    defineField({
      name: 'conceptualTitle',
      title: 'Conceptual Design Title',
      type: 'string',
    }),
    defineField({
      name: 'conceptualText',
      title: 'Conceptual Design Text',
      type: 'text',
    }),
    defineField({
      name: 'conceptualPoints',
      title: 'Conceptual Design Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'conceptualImage',
      title: 'Conceptual Design Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'masterTitle',
      title: 'Master Planning Title',
      type: 'string',
    }),
    defineField({
      name: 'masterText',
      title: 'Master Planning Text',
      type: 'text',
    }),
    defineField({
      name: 'masterPoints',
      title: 'Master Planning Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'masterImage',
      title: 'Master Planning Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
