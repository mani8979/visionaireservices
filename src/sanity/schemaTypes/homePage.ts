import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'cloudinary.asset',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Section Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutText',
      title: 'About Section Text',
      type: 'text',
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Image',
      type: 'cloudinary.asset',
    }),
    // --- NEW FIELDS BELOW ---
    defineField({
      name: 'expertiseTitle',
      title: 'Expertise Section Title',
      type: 'string',
    }),
    defineField({
      name: 'expertiseSubtitle',
      title: 'Expertise Section Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'services',
      title: 'Services / Expertise',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', title: 'ID (e.g. 01)', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'image', title: 'Image', type: 'cloudinary.asset' },
            { name: 'link', title: 'Link (e.g. /constructions)', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'processTitle',
      title: 'Process Section Title',
      type: 'string',
    }),
    defineField({
      name: 'processSubtitle',
      title: 'Process Section Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'num', title: 'Step Number', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text' }
          ]
        }
      ]
    }),
    defineField({
      name: 'featuredWorkTitle',
      title: 'Featured Work Title',
      type: 'string',
    }),
    defineField({
      name: 'featuredWorkSubtitle',
      title: 'Featured Work Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'category', title: 'Category', type: 'string' },
            { name: 'image', title: 'Image', type: 'cloudinary.asset' },
            { name: 'link', title: 'Link URL', type: 'string' }
          ]
        }
      ]
    }),
  ],
})
