import {FC, useEffect, useState, } from 'react';
import {Table, Card, Radio, Divider, Button, Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import {getHighList, delHighList} from '@/utils/api';

type valueType = 1 | 2 | 3 | 4 | 5 ;

interface ObjType {
  1: string,
  2: string,
  3: string,
  4: string,
  5: string,
  [props: number]: any;
}

const Basic: FC = () => {

  const [data, setData] = useState([]);

  const columns:any = [
    {
      title: 'id',
      dataIndex: 'id',
      fixed: 'left',
      width: 80,
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      fixed: 'left',
      width: 100
    },
    {
      title: '性别',
      dataIndex: 'sex',
      render: (value: any) => value === 1 ? '男' : '女',
      width: 80
    },
    {
      title: '状态',
      dataIndex: 'state',
      render: (value: number) => {
        const obj: ObjType = {
          1: '百度FE',
          2: '北大才子',
          3: '咸鱼一条',
          4: '风华浪子',
          5: '创业者'
        }
        return obj[value]
      },
      width: 120
    },
    {
      title: '爱好',
      dataIndex: 'interest',
      width: 80
    },
    {
      title: 'isMarried1',
      dataIndex: 'isMarried1',
      width: 80
    },
    {
      title: 'isMarried2',
      dataIndex: 'isMarried2',
      width: 80
    },
    {
      title: 'isMarried3',
      dataIndex: 'isMarried3',
      width: 80
    },
    {
      title: 'isMarried4',
      dataIndex: 'isMarried4',
      width: 80
    },
    {
      title: 'isMarried5',
      dataIndex: 'isMarried5',
      width: 80
    },
    {
      title: 'isMarried6',
      dataIndex: 'isMarried6',
      width: 80
    },
    {
      title: 'isMarried7',
      dataIndex: 'isMarried7',
      width: 80
    },
    {
      title: 'isMarried8',
      dataIndex: 'isMarried8',
      width: 80
    },
    {
      title: 'isMarried8',
      dataIndex: 'isMarried8',
      width: 80
    },
    {
      title: 'isMarried8',
      dataIndex: 'isMarried8',
      width: 80
    },
    {
      title: 'isMarried8',
      dataIndex: 'isMarried8',
      width: 80
    },
    {
      title: 'isMarried8',
      dataIndex: 'isMarried8',
      width: 80,
      fixed: 'right',
    },
    {
      title: '操作',
      width: 80,
      fixed: 'right',
      render: (value: any) => <Button size="small" onClick={delConfirm(value.id)}>删除</Button>
    }
  ]

  const delConfirm = (id: string) => {
    return () => {
      Modal.confirm({
        title: `你确定要删除id为${id}这条记录吗?`,
        icon: <ExclamationCircleOutlined />,
        content: '',
        okText: '确定',
        okType: 'danger',
        cancelText: 'No',
        async onOk() {
          const res = await delHighList({
            id:id
          })
          if(res.status === 0) {
            const res = await getHighList();
            // setData(res.result);
            let list = res.result;
            list = list.map((item: any) => {
              return item = {...item,key: item._id}
            })
            setData(list);
          }
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
  }

  useEffect(() => {
    (async() => {
      const res = await getHighList();
      // setData(res.result);
      let list = res.result;
      list = list.map((item: any) => {
        return item = {...item,key: item._id}
      })
      setData(list);
    })()
  },[])
 
  return (
    <>
      <Card title="高级表格">
      <Table 
          columns={columns} 
          dataSource={data} 
          pagination= {false}
          scroll={{ y: 240 }} 
      />
     </Card>
    </>
  )
}

export default Basic;