export default {
  name: 'aboutpage',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'contentBlocks' }]
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Front Page'
      }
    }
  }
}
