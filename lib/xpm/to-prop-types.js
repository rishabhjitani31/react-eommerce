const PropTypes = require('prop-types')

function transformDescriptor (descriptor) {
  let propType = transformByTypeId[descriptor.type](descriptor)
  if (descriptor.required) propType = propType.isRequired
  return propType
}

const transformByTypeId = {
  RichText: descriptor => PropTypes.string,
  String: descriptor => PropTypes.string,
  Number: descriptor => PropTypes.number,
  Boolean: descriptor => PropTypes.bool,
  Shape: descriptor =>
    PropTypes.shape(
      Object.keys(descriptor.children).reduce(
        (acc, key) => ({
          ...acc,
          [key]: transformDescriptor(descriptor.children[key])
        }),
        {}
      )
    ),
  Array: descriptor => {
    if (!descriptor.children) return PropTypes.array
    return PropTypes.arrayOf(transformDescriptor(descriptor.children))
  },
  TypeEnum: descriptor => {
    return PropTypes.oneOfType(descriptor.children.map(transformDescriptor))
  },
  Enum: descriptor => PropTypes.oneOf(descriptor.children),
  Function: descriptor => PropTypes.func,
  MultiLineString: descriptor => PropTypes.string,
  Component: descriptor => PropTypes.any,
  Size: descriptor =>
    PropTypes.shape({
      value: PropTypes.any,
      unit: PropTypes.string
    })
}

export function toPropTypes (descriptor) {
  var propTypes = {}

  Object.keys(descriptor.attributes).forEach(key => {
    propTypes[key] = transformDescriptor(descriptor.attributes[key])
  })

  return propTypes
}

export function toDefaultProps (descriptor) {
  const defaultProps = {}

  Object.keys(descriptor.attributes).forEach(key => {
    const attr = descriptor.attributes[key]
    defaultProps[key] =
      typeof attr.default === 'function' ? attr.default() : attr.default
  })

  return defaultProps
}
