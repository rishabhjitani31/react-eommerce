import Types from 'lib/types'

export default Types.Component({
  id: 'BreadCrumb',
  name: 'BreadCrumb',
  description: 'BreadCrumb Comonenent',
  attributes: {
    children: Types.Component({
      name: 'breadcrumb list'
    })
  }
})
