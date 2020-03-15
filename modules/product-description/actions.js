import { createActions } from 'redux-nano'

export const PRODUCT_DESCRIPTION = createActions('PRODUCT_DESCRIPTION', {
  getProductDescription: {},
  getProductDescriptionSuccess: {
    payload: data => data
  },
  getProductDescriptionFailure: {
    payload: data => data
  }
})
