import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'constructionsPage',
  title: 'Constructions Page',
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
      name: 'yearsExperience',
      title: 'Years Experience',
      type: 'string',
    }),
    defineField({
      name: 'projectsCompleted',
      title: 'Projects Completed',
      type: 'string',
    }),
    defineField({
      name: 'clientSatisfaction',
      title: 'Client Satisfaction',
      type: 'string',
    }),
    defineField({
      name: 'residentialTitle',
      title: 'Residential Title',
      type: 'string',
    }),
    defineField({
      name: 'residentialText',
      title: 'Residential Text',
      type: 'text',
    }),
    defineField({
      name: 'residentialPoints',
      title: 'Residential Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'residentialImage',
      title: 'Residential Image',
      type: 'cloudinary.asset',
      
    }),
    defineField({
      name: 'commercialTitle',
      title: 'Commercial Title',
      type: 'string',
    }),
    defineField({
      name: 'commercialText',
      title: 'Commercial Text',
      type: 'text',
    }),
    defineField({
      name: 'commercialPoints',
      title: 'Commercial Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'commercialImage',
      title: 'Commercial Image',
      type: 'cloudinary.asset',
      
    }),
    defineField({
      name: 'transformationsTitle',
      title: 'Transformations Title',
      type: 'string',
    }),
    defineField({
      name: 'transformationsText',
      title: 'Transformations Text',
      type: 'string',
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'cloudinary.asset',
      
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'cloudinary.asset',
      
    }),
  ],
})
