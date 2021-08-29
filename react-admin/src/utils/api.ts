import http from './http';

export const login = (params?: Object) => http.post('/users/login', params);

export const getGalleryList = (params?: Object) => http.get('/pics/list', params);

export const getHighList = (params?: Object) => http.get('/hightables/list', params);

export const delHighList = (params?: Object) => http.post('/hightables/delete', params);

export const getCity = (params?: Object) => http.get('/cities/list', params);

export const getCityList = (params?: Object) => http.post('/cities/manage/list', params);

export const delCityItem = (params?: Object) => http.post('/cities/manage/del', params);

export const addCityItem = (params?: Object) => http.post('/cities/manage/add', params);

export const getOrderList = (params?: Object) => http.post('/orders/list', params);

export const getUserList = (params?: Object) => http.get('/users/list', params);