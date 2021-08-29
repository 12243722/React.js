import {FC, useEffect, useState, useMemo} from 'react';
import {Table, Card, Radio, Divider, Button, Modal, Form, Input, Select, DatePicker, message} from 'antd';
import moment from 'moment';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import {getCity, getCityList, delCityItem, addCityItem, getOrderList} from '@/utils/api';

interface dataType {
  bike_sn: string
  distance: number
  end_time: number
  mobile: string
  order_sn: string
  start_time: number
  status: number
  total_fee: number
  user_id: number
  user_name: string
  user_pay: number
  _id: string
}

const Order: FC = () => {

const [form] = Form.useForm();

const [data, setData] = useState<dataType[]>([])
const [total, setTotal] = useState<number>(0);
const [page, setPage] = useState<number>(1);
const [pageSize, setPageSize] = useState<number | undefined>(10);
const [status, setStatus] = useState<string | undefined>(undefined);


const columns = [
  {
    title: 'status',
    dataIndex: 'status',
    render: (value: dataType) => value.status === 1 ? '进行中' : '已完成'
  },
  {
    title: 'bike_sn',
    dataIndex: 'bike_sn',
  },
  {
    title: 'distance',
    dataIndex: 'distance',
  },
  {
    title: 'end_time',
    dataIndex: 'end_time',
  },
  {
    title: 'mobile',
    dataIndex: 'mobile',
  },
  {
    title: 'order_sn',
    dataIndex: 'order_sn',
  },
  {
    title: 'start_time',
    dataIndex: 'start_time',
  }
]

useEffect(() => {
  (async() => {
    const res = await getOrderList({
      page: page,
      page_size: pageSize,
      status: status
    })
    let list = res.result;
    list = list.map((item: any) => {
      return item = {...item,key: item._id}
    })
    setData(list);
    setTotal(res.total);
  })()
}, [page, pageSize, status])

const onFinish = (value:any) => {
  setStatus(value.status)
}

const onReset = () => {
  console.log('reset')
}

  return (
    <>
      <Card>
      <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
              <Form.Item
                name="status"
                label="订单状态"  
              >
                <Select style={{ width: 120 }} allowClear>
                  <Select.Option value="1">进行中</Select.Option>
                  <Select.Option value="2">已结束</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item shouldUpdate={true}>
                {() => (
                  <>
                    <Button
                      type="primary"
                      htmlType="submit"
                    >
                      查询
                    </Button>
                    <Button
                      htmlType="reset"
                      onClick={onReset}
                    >
                      重置
                    </Button>
                  </>
                )}
              </Form.Item>
        </Form>
     </Card>
    
     <br />

     <Card title="高级表格">
     <Table 
          columns={columns} 
          dataSource={data}
          pagination={{
            total: total,
            onChange: function(page, pageSize) {
              // console.log(page,pageSize)
              setPage(page);
              setPageSize(pageSize);
            },
            showSizeChanger: true 
          }}
      />
     </Card>
    </>
  )
}

export default Order;