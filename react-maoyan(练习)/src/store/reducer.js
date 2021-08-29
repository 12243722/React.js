// 用于合并各个页面的reducer
import { combineReducers } from 'redux-immutable';

import { reducer as hotReducer } from '../home/movie/hot/reducer';
// import { reducer as classicReducer } from '../home/movie/classic/reducer';
// import { reducer as waitReducer } from '../home/movie/wait/reducer';

//最大的reducer
const reducer = combineReducers({
  hotReducer: hotReducer
  // classicReducer: classicReducer,
  // waitReducer: waitReducer
})

export default reducer;