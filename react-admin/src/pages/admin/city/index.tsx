import {FC, useEffect, useState, useMemo} from 'react';
import {Table, Card, Radio, Divider, Button, Modal, Form, Input, Select, DatePicker, message} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import {getCity, getCityList, delCityItem, addCityItem} from '@/utils/api';

import useDelete from './useDelete';
import useAdd from './useAdd';
import useQuery from './useQuery';

import {format} from '@/utils/index';

interface CityType {
  id: number;
  nm: string;
  py: string;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const City: FC = () => {

  const [data, setData] = useState([]);

  const {
    form,
    cts,
    onFinish,
    handleChange,
    onReset,
    list1
  } = useQuery(data)
  const {
    addForm,
    isModalVisible,
    modelShow,
    handleOk,
    handleCancel
  } = useAdd(setData)

  const { deleteItem }  = useDelete(<ExclamationCircleOutlined />, setData);

  // 获取数据
  useEffect(() => {
    (async() => {
      const res = await getCityList()
      let list = res.result;
      list = list.map((item: any) => {
        return item = {...item,key: item._id}
      })
      setData(list);
      // setList(list);
    })()
  },[])

  const columns: any = [
    {
      title: '城市ID',
      dataIndex: '_id',
    },
    {
      title: '城市名称',
      dataIndex: 'city',
    },
    {
      title: '用车模式',
      dataIndex: 'useCar',
      render: (value: string) => value === '1' ? '禁停区' : '停车点'
    },
    {
      title: '运营模式',
      dataIndex: 'operating',
      render: (value: string) => value === '1' ? '自营' : '加盟'
    },
    {
      title: '城市管理员',
      dataIndex: 'admin',
    },
    {
      title: '城市开通时间',
      dataIndex: 'openTime',
      render: (value: string) => format(value)
    },
    {
      title: '操作',
      render: (value: any) => <Button onClick={deleteItem(value)}>删除</Button>
    }
  ]


  return (
    <>
      <Card>
      <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
              <Form.Item
                label="城市"
                name="city"
              >
                <Select style={{ width: 120 }} allowClear onDropdownVisibleChange={handleChange}>
                  {
                    cts.map((item: CityType) => {
                    return <Select.Option key={item.id} value={item.nm}>{item.nm}</Select.Option>
                    })
                  }
                  
                </Select>
              </Form.Item>
              <Form.Item
                name="useCar"
                label="用车模式"  
              >
                <Select style={{ width: 120 }} allowClear>
                  <Select.Option value="1">禁停区</Select.Option>
                  <Select.Option value="2">停车点</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="operating"
                label="营运模式"  
              >
                <Select style={{ width: 120 }} allowClear >
                   <Select.Option value="1">自营</Select.Option>
                   <Select.Option value="2">加盟</Select.Option>
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
      <Button type="primary" onClick={modelShow}>新增</Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form
        {...layout}
        name="basic"
        form={addForm}
      >
        <Form.Item
          label="城市"
          name="city"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select allowClear onDropdownVisibleChange={handleChange}>
                  {
                    cts.map((item: CityType) => {
                    return <Select.Option key={item.id} value={item.nm}>{item.nm}</Select.Option>
                    })
                  }
                  
          </Select>
        </Form.Item>

        <Form.Item
          label="用车模式"
          name="useCar"
          rules={[{ required: true}]}
        >
          <Select allowClear>
            <Select.Option value="1">禁停区</Select.Option>
            <Select.Option value="2">停车点</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="营运模式"
          name="operating"
          rules={[{ required: true}]}
        >
          <Select allowClear >
              <Select.Option value="1">自营</Select.Option>
              <Select.Option value="2">加盟</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="管理员"
          name="admin"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="开通时间"
          name="openTime"
          rules={[{ required: true }]}
        >
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
          />
        </Form.Item>

        </Form>
      </Modal>
     <Table 
          columns={columns} 
          dataSource={list1} 
      />
     </Card>


    </>
  )
}

export default City;