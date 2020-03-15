import { INITIAL_CLICK } from './actions'
const { createReducer } = require('redux-nano')

const initialState = {
  initiClick: false,
  clickData: []
}

const home = createReducer(initialState, {
  [INITIAL_CLICK.onButtonClickActionSuccess]: (state, action) => {
    return { ...state, clickData: action.payload }
  },
  [INITIAL_CLICK.onButtonClickActionFailure]: (state, action) => {
    return { ...state, clickData: action.payload }
  }
})

export default home
