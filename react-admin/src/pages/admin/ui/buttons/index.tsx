import { FC } from 'react';
import { Button, Space } from 'antd';
import Card from '../components/Cart';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';


const Buttons: FC = () => {
  return (
    <Space className="Buttons" direction="vertical" style={{width: '100%'}}>
      <Card title="基础按钮">
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="primary" danger>Primary</Button>
          <Button type="dashed" danger>Dashed Button</Button>
          <Button type="primary" disabled danger>Primary Button</Button>
      </Card>

      <Card title="图形按钮"  >
        <Button  icon={<PlusOutlined />}>添加</Button>
        <Button  icon={<EditOutlined />}>编辑</Button>
        <Button  icon={<DeleteOutlined />}>删除</Button>
        <Button  shape="circle" icon={<SearchOutlined />} />
      </Card>

      <Card title="loading..."  >
      <Button type="primary" loading>Loading
        </Button>
      </Card>
    </Space>
  )
}

export default Buttons;