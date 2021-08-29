// 封装接口
import http from "./http";

// 首页的最受欢迎列表接口
export const getRatedListApi = params => http.get("/rated/list", params);

// 首页的电影列表
export const getMovieListApi = params => http.get("/Movies/list", params);

// 首页加载更多
export const getMovieListMoreApi = params => http.post("/movies/more", params);

// 详情页数据
export const getMovieDetailApi = params => http.post("/movies/detail", params);

// 城市选择列表
export const getCitiesListApi = params => http.get("/area/list", params);
