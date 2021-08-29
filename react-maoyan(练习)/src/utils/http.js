import qs from "qs";

//封装请求
const prefix = "http://pudge.wang:3080/api";
const http = {
  get(url, params) {
    // console.log(params);
    if (params) {
      // params: {a: 1,b: 2}
      // 目标 url?a=1&b=2
      let arr = Object.keys(params); // [a,b]
      url += "?";
      // arr.forEach(item =>{
      //   url += item + "=" + params[items];
      // })
      arr = arr.map(item => {
        return item + "=" + params[item];
      }); // ['a=1','b=2']
      url += arr.join("&");
    }
    return fetch(prefix + url)
      .then(response => response.json())
      .then(res => {
        if (res.status === 0) {
          return res;
        } else {
          console.log(res.msg);
        }
      });
  },
  post(url, params) {
    // NProgress.start();
    // params ? params : {};
    // params = {
    //   ...params,
    //   cityId:this.$store.state.city.cityId
    // }
    return fetch(prefix + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: qs.stringify(params) 
    })
      .then(response => {
        // NProgress.done();
        return response.json();
      })
      .then(res => {
        if (res.status === 0) {
          return res;
        } else {
          console.log(res.msg);
        }
      });
  }
};

export default http;
