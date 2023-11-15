export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor().schemaType('mainSettings').documentId('mainSettings')
        ),
      S.listItem()
        .title('Frontpage')
        .child(S.editor().schemaType('frontpage').documentId('frontpage')),
      S.listItem()
        .title('Aboutpage')
        .child(S.editor().schemaType('aboutpage').documentId('aboutpage')),
      S.listItem()
        .title('Projects list')
        .child(
          S.editor().schemaType('projectsList').documentId('projectsList')
        ),
      S.listItem()
        .title('Jobs list')
        .child(S.editor().schemaType('jobsList').documentId('jobsList')),
      S.divider(),
      // Rest of the items
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'frontpage',
            'mainSettings',
            'jobsList',
            'aboutpage',
            'projectsList'
          ].includes(listItem.getId())
      )
    ])
