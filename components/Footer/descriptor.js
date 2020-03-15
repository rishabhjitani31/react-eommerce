// NOTE: Descriptors cannot use "~/" require shortcut or require
// any outside files (except for other descriptors).
import Types from 'lib/xpm'

export default Types.Component({
  id: 'Footer',
  name: 'Footer',
  description: 'App Footer',
  attributes: {
    showSocial: Types.Boolean({
      name: 'Show Social',
      description: 'A boolean flag to show social links.'
    }),
    showFooterContent: Types.Boolean({
      name: 'Show Footer Content',
      description: 'A boolean flag to show footer content links.'
    }),
    showFooterLinks: Types.Boolean({
      name: 'Show Footer Links',
      description: 'A boolean flag to show footer links.'
    }),
    showCopyright: Types.Boolean({
      name: 'Show Copyright',
      description: 'A boolean flag to show copyright line.'
    }),
    socialLinks: Types.arrayOf(
      Types.Shape({
        name: Types.String({
          required: true
        }),
        path: Types.String({
          required: true
        })
      })
    ),
    footerContentLinks: Types.arrayOf(
      Types.shape({
        name: Types.String({
          required: true
        }),
        path: Types.String({
          required: true
        })
      })
    ),
    footerLinks: Types.arrayOf(
      Types.shape({
        name: Types.String({
          required: true
        }),
        path: Types.String({
          required: true
        })
      })
    )
  }
})
