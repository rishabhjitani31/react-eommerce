import Types from 'lib/xpm'

export default Types.Component({
  id: 'Filter',
  name: 'filter',
  description: 'Filter',
  attributes: {
    heading: Types.String({
      name: 'heading of the filter'
    }),
    subHeading: Types.String({
      name: 'placeholder of input'
    }),
    filter1: Types.String({
      name: 'filter name 1'
    }),
    filter2: Types.String({
      name: 'filter name 2'
    }),
    filter3: Types.String({
      name: 'filter name 3'
    }),
    filter4: Types.String({
      name: 'filter name 4'
    }),
    filter5: Types.String({
      name: 'filter name 5'
    }),
    filter6: Types.String({
      name: 'filter name 6'
    }),
    startPrice: Types.String({
      name: 'start range of price filter'
    }),
    endPrice: Types.String({
      name: 'end range of price filter'
    })
  }
})
