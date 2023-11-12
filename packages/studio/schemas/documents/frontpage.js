import frontpageBlocks from './frontpageBlocks'

export default {
  name: 'frontpage',
  title: 'Frontpage',
  type: 'document',
  sortable: 'true',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'frontpageBlocks'}],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Front Page',
      }
    },
  },
}
