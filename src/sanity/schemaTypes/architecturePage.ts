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
      title: 'Residential Architecture Title',
      type: 'string',
    }),
    defineField({
      name: 'residentialText',
      title: 'Residential Architecture Text',
      type: 'text',
    }),
    defineField({
      name: 'residentialPoints',
      title: 'Residential Architecture Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'residentialImage',
      title: 'Residential Architecture Image',
      type: 'cloudinary.asset',
    }),
    defineField({
      name: 'commercialTitle',
      title: 'Commercial Architecture Title',
      type: 'string',
    }),
    defineField({
      name: 'commercialText',
      title: 'Commercial Architecture Text',
      type: 'text',
    }),
    defineField({
      name: 'commercialPoints',
      title: 'Commercial Architecture Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'commercialImage',
      title: 'Commercial Architecture Image',
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
      type: 'text',
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image (Blueprint)',
      type: 'cloudinary.asset',
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image (Finished Structure)',
      type: 'cloudinary.asset',
    }),
  ],
})
