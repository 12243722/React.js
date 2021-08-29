import {FC} from 'react';
import { Card as AntdCard, Space } from 'antd';

const Card: FC<any> = (props:any) => {
  return (
    <AntdCard title={ props.title }  >
    <Space>
      { props.children }
    </Space>
  </AntdCard>
  )
}

export default Card;