import { FC, useEffect } from 'react';
import { Card } from 'antd';
import { Chart } from '@antv/g2';


const Charts: FC = () => {
  
  const initChart1 = () => {
    const data = [
      { week: '周一', sales: 38 },
      { week: '周二', sales: 52 },
      { week: '周三', sales: 61 },
      { week: '周四', sales: 145 },
      { week: '周五', sales: 48 },
      { week: '周六', sales: 38 },
      { week: '周七', sales: 38 },
    ];
    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 500,
    });
    
    chart.data(data);
    chart.scale('sales', {
      nice: true,
    });
    
    chart.tooltip({
      position: 'right',
      crosshairs: {
      type: 'y',
  },
    });
    chart.interaction('element-highlight');
    
    chart.interval().position('week*sales');
    
    chart.render();
  }

  const initChart2 = () => {
    const data = [
      { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
      { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
      { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
      { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
      { name: 'London', 月份: 'May', 月均降雨量: 47 },
      { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
      { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
      { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
      { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
      { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
      { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
      { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
      { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
      { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
      { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
      { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 },
    ];
    
    const chart = new Chart({
      container: 'container2',
      autoFit: true,
      height: 500,
    });
    
    chart.data(data);
    chart.scale('月均降雨量', {
      nice: true,
    });
    chart.tooltip({
      showMarkers: false,
      shared: true,
    });
    
    chart
      .interval()
      .position('月份*月均降雨量')
      .color('name')
      .adjust([
        {
          type: 'dodge',
          marginRatio: 0,
        },
      ]);
    
    chart.interaction('active-region');
    
    chart.render();
  }

  useEffect(() => {
    initChart1();
    initChart2();
  },[])
  
  return (
    <>
      <Card title="图表">
        <div id="container"></div>
      </Card>
      <Card title="图表2">
        <div id="container2"></div>
      </Card>
    </>
  )
}

export default Charts;