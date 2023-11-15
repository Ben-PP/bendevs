export default {
  name: 'contentBlocks',
  title: 'Content Blocks',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}
