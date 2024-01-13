import { Rule } from 'sanity'

export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'startDate',
      title: 'Start date',
      type: 'date'
    },
    {
      name: 'endDate',
      title: 'End date',
      type: 'date'
    },
    {
      name: 'github',
      title: 'Github',
      type: 'url'
    },

    {
      name: 'availableAt',
      title: 'Available at',
      type: 'url'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      sortable: 'true',
      of: [{ type: 'block' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      }
    }
  ]
}
