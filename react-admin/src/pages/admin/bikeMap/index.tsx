import { FC, useEffect } from 'react';
import { Card } from 'antd';
import AMapLoader from '@amap/amap-jsapi-loader';

let map:any;

const Map: FC = () => {
  useEffect(() => {
    AMapLoader.load({
      "key": "6ca5e8fef6c2ca89a0d913a9ea080a97",  // 申请好的Web端开发者Key，首次调用 load 时必填
      "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      "AMapUI": {             // 是否加载 AMapUI，缺省不加载
        "version": '1.1',   // AMapUI 缺省 1.1
        "plugins": [],       // 需要加载的 AMapUI ui插件
      },
      "Loca": {                // 是否加载 Loca， 缺省不加载
        "version": '1.3.2'  // Loca 版本，缺省 1.3.2
      },
    }).then((AMap) => {
      // var satellite = new AMap.TileLayer.Satellite();
      // var roadNet = new AMap.TileLayer.RoadNet();
    //   var buildings = new AMap.Buildings({
    //     'zooms':[16,18],
    //     'zIndex':10,
    //     'heightFactor':2//2倍于默认高度，3D下有效
    // });//楼块图层    
      map = new AMap.Map('container', {
         zoom:11,//级别
        // center: [116.397428, 39.90923],//中心点坐标
        viewMode:'3D',//使用3D视图
        // pitch:60,
        // rotation:-35,
        // features:['bg','road','point'],//隐藏默认楼块
        // mapStyle:'amap://styles/light',
        // layers: [new AMap.TileLayer.Satellite(),//高德默认标准图层
        //          buildings],
        // zoom: 17
        // layers:[
        //   satellite,
        // roadNet
        //  ]
      });
      AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){//异步加载插件
        var toolbar = new AMap.ToolBar();
        map.addControl(toolbar);

        var Scale = new AMap.Scale();
        map.addControl(Scale);
    });
      AMap.plugin('AMap.Driving', function() {
        var driving = new AMap.Driving({
          // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
          policy: AMap.DrivingPolicy.LEAST_TIME
        })
        
        var startLngLat = [120.215696,30.292743]
        var endLngLat = [120.441361,30.237717]
        
        driving.search(startLngLat, endLngLat, function (status:any, result:any) {
          // 未出错时，result即是对应的路线规划方案
         console.log(result)
        var path: any = [];
        result.routes[0].steps.forEach((item:any,index:any) => {
          path.push(new AMap.LngLat(item.start_location.lng, item.start_location.lat ));
           if(index==item ){
            path.push(endLngLat);
           }
        })
        
        // 创建折线实例
        var polyline = new AMap.Polyline({
            path: path,  
            borderWeight: 2, // 线条宽度，默认为 1
            strokeColor: 'red', // 线条颜色
            lineJoin: 'round' // 折线拐点连接处样式
        });
        
        // 将折线添加至地图实例
        map.add(polyline);
        })

      })

      // 创建 AMap.Icon 实例：
      var icon = new AMap.Icon({
        size: new AMap.Size(40, 50),    // 图标尺寸
        image: require('@/assets/map.jpg'),  // Icon的图像
        // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
        imageSize: new AMap.Size(40, 50)   // 根据所设置的大小拉伸或压缩图片
      });
      var marker = new AMap.Marker({
        position: new AMap.LngLat(120.215696,30.292743),
        icon: icon, // 添加 Icon 图标 URL
        title: '起点'
    });
    
    map.add(marker);
    }).catch(e => {
      console.log(e);
    })
  }, [])
   
  return (
    <>
      <Card title="地图">
        <div id="container" style={{height: 400}}></div>
      </Card>
    </>
  )
}

export default Map;