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
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'file',
      options: {
        accept: '.pdf'
      }
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
