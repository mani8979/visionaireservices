import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'Used in the header and footer',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code, no spaces (e.g. 917780594495)',
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
    }),
    defineField({
      name: 'officeAddress',
      title: 'Office Address',
      type: 'text',
    }),
  ],
})
