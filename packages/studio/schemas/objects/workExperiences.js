export default {
  name: 'workExperiences',
  title: 'Work Experinces',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'startDate',
      title: 'Start date',
      type: 'date',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'endDate',
      title: 'End date',
      type: 'date'
    },
    {
      name: 'title',
      title: 'Job title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      sortable: 'true',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
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
