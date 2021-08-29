import {FC, useEffect, useState} from 'react';
import {Button, Card, Table, Modal, Transfer } from 'antd';

import {getUserList} from '@/utils/api';

import { menuList } from '@/pages/admin/components/Menu';

const Rich: FC = () => {

  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [targetKeys, setTargetKeys] = useState([]);

  useEffect(() => {
    (async() => {
      const res = await getUserList()
      let list = res.result;
      list = list.map((item: any) => {
        return item = {...item,key: item._id}
      })
      setDataSource(list);
    })()
  })
  const columns = [
    {
      title: 'id',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '操作',
      render: (value: any) => <Button onClick={handleClick(value)}>授权</Button>
    }
  ]

  const handleClick = (value: any) => {
    return () => {
      setIsModalVisible(true)
      setTargetKeys(value.auth)
    }
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (nextTargetKeys: any, direction: any, moveKeys: any) => {
    console.log(nextTargetKeys, direction, moveKeys)
  }

  return (
    <>
      <Card title="权限设置">
        <Table 
          dataSource={dataSource} 
          columns={columns}
          bordered={true}
          pagination={false} 
        />
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Transfer
          dataSource={menuList}
          titles={['未有', '已有']}
          targetKeys={targetKeys}
          onChange={onChange}
          onScroll={onScroll}
          render={item => item.title}
        />
        </Modal>
      </Card>
    </>
  )
}

export default Rich;