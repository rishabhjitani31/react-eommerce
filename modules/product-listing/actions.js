const { createActions } = require('redux-nano')

export const INITIAL_CLICK = createActions('INITIAL_CLICK', {
  onButtonClickAction: {
    payload: data => data
  },
  onButtonClickActionSuccess: {
    payload: data => data
  },
  onButtonClickActionFailure: {
    payload: data => data
  }
})
