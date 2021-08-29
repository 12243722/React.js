import { Effect, Reducer, Subscription } from 'umi';
import menu from '@/resouce/menu';

// 定义了model的state的类型
export interface AdminModelState {
  pageTitle: string
}

// 定义了model的类型
export interface AdminModelType {
  namespace: 'admin';
  state: AdminModelState;
  effects: {};
  reducers: {
    changeTitle: Reducer
  };
  subscriptions: { setup: Subscription };
}

const AdminModel: AdminModelType = {
  // 定义模块
  namespace: 'admin',
  // store的数据
  state: {
    pageTitle: ''
  },
  // 写同步方法的
  reducers: {
    changeTitle(state, {payload}) {
      return {
        ...state,
        pageTitle: payload
      }
    }
  },
  // 写异步方法 
  effects: {},
  // 订阅
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
         for (let i = 0; i < menu.length; i++) {
           if(menu[i].children){
              for(let j = 0; j < menu[i].children?.length; j++) {
                if(menu[i].children[j].key === pathname) {
                  dispatch({
                    type: 'changeTitle',
                    payload: menu[i].children[j].title
                  })
                }
              }
           } else {
             if (menu[i].key === pathname){
               dispatch({
                 type: 'changeTitle',
                 payload: menu[i].title
               })
             }
           }
         }
      })
    }
  }
};
export default AdminModel;