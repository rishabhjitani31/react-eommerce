import { createReducer } from 'redux-nano'
import { PRODUCT_DESCRIPTION } from './actions'

const initialState = {
  product: {}
}

const productDescription = createReducer(initialState, {
  [PRODUCT_DESCRIPTION.getProductDescriptionSuccess]: (state, action) => {
    return { ...state, product: action.payload }
  },
  [PRODUCT_DESCRIPTION.getProductDescriptionFailure]: (state, action) => {
    return { ...state, product: action.payload }
  }
})

export default productDescription
