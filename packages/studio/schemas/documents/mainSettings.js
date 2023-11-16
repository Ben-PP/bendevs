export default {
  name: 'mainSettings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url'
    },
    {
      name: 'github',
      title: 'Github',
      type: 'url'
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
