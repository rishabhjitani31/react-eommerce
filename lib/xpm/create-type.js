const baseOptionKeys = {
  id: true,
  name: true,
  description: true,
  required: true,
  default: true,
  children: true,
  nullValue: true,
  attributes: true,
  condition: true,
  internal: true
}

export default function createType ({ id, attributes, ...rest }) {
  const optionsDescriptor = {
    ...baseOptionKeys,
    ...attributes
  }

  return function constructType (options) {
    options = options || {}
    Object.keys(options.attributes || {}).forEach(key => {
      options.attributes[key].key = key
    })

    for (var key in options) {
      if (!optionsDescriptor[key]) {
        throw new Error(
          `${id}: options.${key} given, only ${JSON.stringify(
            Object.keys(optionsDescriptor)
          )} allowed!`
        )
      }
      let opt = optionsDescriptor[key]
      if (typeof opt !== 'object') {
        opt = optionsDescriptor[key] = {}
      }
      opt.validate =
        opt.validate ||
        function () {
          return true
        }
    }

    return {
      type: id,
      ...rest,
      ...options
    }
  }
}
