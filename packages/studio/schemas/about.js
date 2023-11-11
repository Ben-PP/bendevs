export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [{type:'block'}]
    }
  ]
}