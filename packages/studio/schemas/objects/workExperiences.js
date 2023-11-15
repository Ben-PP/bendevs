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
