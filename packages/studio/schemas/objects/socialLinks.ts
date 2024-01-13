import { Rule } from 'sanity'

export default {
  name: 'socialLinks',
  type: 'document',
  title: 'Social links',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: ['github', 'linkedin']
      },
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}
