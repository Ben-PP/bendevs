export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'nameSlug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 100,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replaceAll('ä', 'a')
            .replaceAll('ö', 'o')
            .slice(0, 200)
      }
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'Short description'
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      sortable: 'true',
      of: [{ type: 'block' }]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      }
    }
  ]
}
