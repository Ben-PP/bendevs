export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Frontpage')
        .child(S.editor().schemaType('frontpage').documentId('frontpage')),
      S.divider(),
      // Rest of the items
      ...S.documentTypeListItems().filter((listItem) => !['frontpage'].includes(listItem.getId())),
    ])
