import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Project Category',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'cloudinary.asset',
      
    }),
    defineField({
      name: 'link',
      title: 'Project Link',
      type: 'string',
    }),
  ],
})
