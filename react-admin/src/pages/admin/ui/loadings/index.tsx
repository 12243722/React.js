import { FC } from 'react';
import { Space, Spin } from 'antd';
import Card from '../components/Cart';


const Buttons: FC = () => {
  return (
    <Space className="Buttons" direction="vertical" style={{width: '100%'}}>
      <Card title="Spin用法">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Card>
    </Space>
  )
}
export default Buttons;