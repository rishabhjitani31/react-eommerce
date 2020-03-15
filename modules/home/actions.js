import { createActions } from 'redux-nano'

export const INITIAL_CLICK = createActions('INITIAL_CLICK', {
  onButtonClickAction: {},
  onButtonClickActionSuccess: {
    payload: data => data
  },
  onButtonClickActionFailure: {
    payload: data => data
  }
})
