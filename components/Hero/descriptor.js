// NOTE: Descriptors cannot use "~/" require shortcut or require
// any outside files (except for other descriptors).
import Types from 'lib/xpm'

export default Types.Component({
  id: 'Hero',
  name: 'Hero',
  attributes: {
    backgroundImage: Types.String({
      name: 'Desktop Image URL'
    }),
    mobileBackgroundImage: Types.String({
      name: 'Mobile Image URL'
    }),
    imageLink: Types.String({
      name: 'Image Link'
    }),
    containerHeight: Types.Size({
      name: 'Image Height',
      default: {
        value: 600,
        unit: 'px'
      }
    }),
    title: Types.String({
      name: 'Title'
    }),
    subTitle: Types.String({
      name: 'Sub-title'
    }),
    informationText: Types.String({
      name: 'Information text'
    }),
    button1Link: Types.String({
      name: 'Button 1 URL'
    }),
    button1Text: Types.String({
      name: 'Button 1 Text'
    }),
    button2Link: Types.String({
      name: 'Button 2 URL'
    }),
    button2Text: Types.String({
      name: 'Button 2 Text'
    }),
    horizontalAlign: Types.Enum({
      name: 'Horizontal alignment',
      children: ['left', 'center', 'right'],
      default: 'left'
    }),
    verticalAlign: Types.Enum({
      name: 'Vertical alignment',
      children: ['top', 'center', 'bottom'],
      default: 'bottom'
    }),
    contentColor: Types.Enum({
      name: 'Content Color',
      children: ['black', 'white'],
      default: 'black'
    }),
    buttonColor: Types.Enum({
      name: 'Button Color',
      children: ['black', 'white'],
      default: 'black'
    }),
    heroWidth: Types.Size({
      name: 'Content Width',
      default: {
        value: 40,
        unit: '%'
      }
    }),
    contentInset: Types.Size({
      name: 'Content Inset',
      default: {
        value: '10',
        unit: '%'
      }
    }),
    bgHorizontalAlign: Types.Enum({
      name: 'BG Horizontal Align',
      children: ['left', 'center', 'right'],
      default: 'center'
    }),
    bgVerticalAlign: Types.Enum({
      name: 'BG Vertical Align',
      children: ['top', 'center', 'bottom'],
      default: 'center'
    })
  }
})
