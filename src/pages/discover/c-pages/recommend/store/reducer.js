import { Map } from 'immutable';

import * as actionTypes from './constans'

const defaultState = Map({
  topBanners: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set("topBanners", action.topBanners)
    default:
      return state
  }
}

export default reducer
