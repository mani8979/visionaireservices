import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'falseCeilingPage',
  title: 'False Ceiling Page',
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
      type: 'cloudinary.asset',
    }),
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
    }),
    defineField({
      name: 'mainTitle',
      title: 'Main Section Title',
      type: 'string',
    }),
    defineField({
      name: 'mainText',
      title: 'Main Section Text',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Section Image',
      type: 'cloudinary.asset',
    }),
  ],
})
