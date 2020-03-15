import createType from './create-type'

export default {
  String: createType({
    id: 'String',
    attributes: {
      minlength: {
        validate: value => value >= 0,
        default: 0
      },
      maxlength: {
        validate: value => value >= 0,
        default: Number.MAX_VALUE
      }
    }
  }),
  RichText: createType({
    id: 'RichText'
  }),
  Number: createType({
    id: 'Number',
    default: null,
    attributes: {
      min: {
        validate: value => typeof value === 'number',
        default: -Number.MIN_VALUE
      },
      max: {
        validate: value => typeof value === 'number',
        default: Number.MAX_VALUE
      },
      step: {
        validate: value => typeof value === 'number',
        default: 1
      }
    }
  }),
  Boolean: createType({
    id: 'Boolean'
  }),
  Shape: createType({
    id: 'Shape',
    default: {}
  }),
  Array: createType({
    id: 'Array',
    default: []
  }),
  Enum: createType({
    id: 'Enum'
  }),
  Component: createType({
    id: 'Component'
  }),
  Function: createType({
    id: 'Function',
    default: () => {}
  }),
  MultiLineString: createType({
    id: 'MultiLineString',
    default: ''
  }),
  Size: createType({
    id: 'Size',
    default: () => ({ value: '', unit: 'auto' })
  })
}
