export default {
  name: 'jobsList',
  type: 'document',
  title: 'Jobs',
  sortable: 'true',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'workExperiences' }]
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Jobs'
      }
    }
  }
}
