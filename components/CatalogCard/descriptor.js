// NOTE: Descriptors cannot use "~/" require shortcut or require
// any outside files (except for other descriptors).
import Types from 'lib/xpm'

export default Types.Component({
  id: 'CatalogCard',
  name: 'Catalog Card',
  description: 'Show Catalog for all genders',
  attributes: {
    image: Types.String({
      name: 'Image',
      description: 'Image src to show in header of the catalog card.'
    }),
    title: Types.String({
      name: 'Title',
      description: 'A title to show in the floating card of the catalog.'
    }),
    description: Types.String({
      name: 'Description',
      description: 'A description to show in the floating card of the catalog.'
    }),
    floatingCardColor: Types.String({
      name: 'Color',
      description: 'A color for floating card.'
    }),
    buttonLinks: Types.arrayOf(
      Types.Shape({
        name: Types.String({
          required: true
        }),
        onClick: Types.String()
      })
    )
  }
})
