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
      description: 'Include country code, no spaces (e.g. 919522298777)',
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
    defineField({
      name: 'clients',
      title: 'Clients List',
      type: 'array',
      description: 'List of clients shown on the Home and Interiors pages',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Client Name', type: 'string' },
            { name: 'role', title: 'Client Role / Specialty', type: 'string' },
            { name: 'text', title: 'Testimonial Text', type: 'text' }
          ]
        }
      ]
    }),
  ],
})
