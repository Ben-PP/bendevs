export default {
  name: 'socialLinkList',
  type: 'document',
  title: 'Social Links',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'socialLinks' }]
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Social Links'
      }
    }
  }
}
