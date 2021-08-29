import { GET_RATED_LIST } from './actionTypes';
import { getRatedListApi } from '@/utils/api';

// 同步方法
const getRatedList = (list) => {
  return {
    type: GET_RATED_LIST,
    list
  }
}

//异步方法
const getRatedListAsync = () => {
  console.log(1);
  return async dispatch => {
    console.log(23);
   const res = await getRatedListApi();
    
    if(res.status === 0) {
      dispatch(getRatedList(res.result))
    }
   }
}

export {
  getRatedListAsync
}