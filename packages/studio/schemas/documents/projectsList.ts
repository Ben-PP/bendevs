export default {
  name: 'projectsList',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'projects' }]
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Projects'
      }
    }
  }
}
