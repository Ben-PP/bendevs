export default {
  name: 'mainSettings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings'
      }
    }
  }
}
