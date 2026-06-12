import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'finishingDetailsPage',
  title: 'Finishing Details Page',
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
      name: 'falseCeilingTitle',
      title: 'False Ceiling Title',
      type: 'string',
    }),
    defineField({
      name: 'falseCeilingText',
      title: 'False Ceiling Text',
      type: 'text',
    }),
    defineField({
      name: 'falseCeilingImage',
      title: 'False Ceiling Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'profileLightingTitle',
      title: 'Profile Lighting Title',
      type: 'string',
    }),
    defineField({
      name: 'profileLightingText',
      title: 'Profile Lighting Text',
      type: 'text',
    }),
    defineField({
      name: 'profileLightingImage',
      title: 'Profile Lighting Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'puttyPaintingTitle',
      title: 'Putty Painting Title',
      type: 'string',
    }),
    defineField({
      name: 'puttyPaintingText',
      title: 'Putty Painting Text',
      type: 'text',
    }),
    defineField({
      name: 'puttyPaintingPrepImage',
      title: 'Putty Painting Prep Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'puttyPaintingFinishImage',
      title: 'Putty Painting Finish Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
