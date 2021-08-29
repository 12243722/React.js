import { GET_RATED_LIST } from './actionTypes';
import { Map } from 'immutable';

const defaultState = Map({
  ratedList: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_RATED_LIST:
      // return {
      //   ...state,
      //   ratedList: action.list
      // }
       return state.setIn(['ratedList'], action.list)
    default:
       return state;
  }
}

export {
  reducer
};