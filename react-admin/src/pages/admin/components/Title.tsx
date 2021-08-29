import { FC, useEffect, useState } from 'react';
import { useSelector } from 'umi';
import request from 'umi-request';
interface WeatherType {
  city?: string;
  wea?: string;
  [props:string]: any;
}

const Title: FC = () => {
  const [date, setDate] = useState('');
  const [weather, setWeather]:[WeatherType, Function] = useState({});

  const pageTitle = useSelector((state:any) => state.admin.pageTitle)

  const getTime = () => {
    const date = new Date()
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const min = date.getMinutes();
    const s = date.getSeconds();
    setDate(`${y}-${m}-${d} ${h}:${min}:${s}`)
  }

  const getWeather = () => {
     return request
      .get('https://v0.yiketianqi.com/api?version=v61&appid=65169693&appsecret=uwTPg3vC')
      .then((response) => {
        return response
      })
      .catch(function(error) {
        console.log(error); 
      });
  }

  useEffect(() => {
   (async() => {
    const res = await getWeather();
    setWeather(res)
   })()
    getTime()
    setInterval(() => {
      getTime()
    },1000)
  },[])
  return (
     <div className="titleWrap">
        <div className="left">
          { pageTitle }
        </div>
        <span>
          { weather.city } -
          { weather.wea } -
          { date }
        </span>
      </div>
  )
}

export default Title;