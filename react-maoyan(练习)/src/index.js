import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import 'lib-flexible';

// 引入重置样式
import 'as/css/reset.css';
//引入iconfont
 import 'as/iconfont/iconfont.css';

import App from './App.jsx';

ReactDOM.render(
  <BrowserRouter>
   <Provider store={store}>
     <App />
   </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
