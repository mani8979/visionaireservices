import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'interiorsPage',
  title: 'Interiors Page',
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
      name: 'livingTitle',
      title: 'Living Spaces Title',
      type: 'string',
    }),
    defineField({
      name: 'livingText',
      title: 'Living Spaces Text',
      type: 'text',
    }),
    defineField({
      name: 'livingImage',
      title: 'Living Spaces Image',
      type: 'cloudinary.asset',
    }),
    defineField({
      name: 'kitchenTitle',
      title: 'Kitchen Title',
      type: 'string',
    }),
    defineField({
      name: 'kitchenText',
      title: 'Kitchen Text',
      type: 'text',
    }),
    defineField({
      name: 'kitchenImage',
      title: 'Kitchen Image',
      type: 'cloudinary.asset',
    }),
    defineField({
      name: 'bedroomTitle',
      title: 'Bedroom Title',
      type: 'string',
    }),
    defineField({
      name: 'bedroomText',
      title: 'Bedroom Text',
      type: 'text',
    }),
    defineField({
      name: 'bedroomImage',
      title: 'Bedroom Image',
      type: 'cloudinary.asset',
    }),
    defineField({
      name: 'testimonialsTitle',
      title: 'Testimonials Title',
      type: 'string',
    }),
    defineField({
      name: 'testimonial1Text',
      title: 'Testimonial 1 Text',
      type: 'text',
    }),
    defineField({
      name: 'testimonial1Author',
      title: 'Testimonial 1 Author',
      type: 'string',
    }),
    defineField({
      name: 'testimonial1Role',
      title: 'Testimonial 1 Role',
      type: 'string',
    }),
    defineField({
      name: 'testimonial2Text',
      title: 'Testimonial 2 Text',
      type: 'text',
    }),
    defineField({
      name: 'testimonial2Author',
      title: 'Testimonial 2 Author',
      type: 'string',
    }),
    defineField({
      name: 'testimonial2Role',
      title: 'Testimonial 2 Role',
      type: 'string',
    }),
  ],
})
