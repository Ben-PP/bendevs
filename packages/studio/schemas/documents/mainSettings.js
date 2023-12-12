export default {
  name: 'mainSettings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text'
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      }
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
