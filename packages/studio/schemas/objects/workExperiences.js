export default {
  name: 'workExperiences',
  title: 'Work Experinces',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string'
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
      name: 'jobTitle',
      title: 'Job title',
      type: 'string'
    },
    {
      name: 'shortDescription',
      title: 'Short description',
      type: 'string'
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      sortable: 'true',
      of: [{ type: 'block' }]
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
