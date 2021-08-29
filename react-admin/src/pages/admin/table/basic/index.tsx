import {FC, useEffect, useState, } from 'react';
import {Table, Card, Radio, Divider} from 'antd';

import { extend } from 'umi-request';
import { request } from '@/.umi/plugin-request/request';

interface DataType {
  key: string;
  name: string; 
  sex: string;
  age: number;
  address: string;
  [props: string]: any;
}

interface DataType1 {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const Basic: FC = () => {
  const [dataSource1, setDataSource1] = useState<DataType[]>([])

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      sex: '男',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      sex: '女',
      age: 42,
      address: '西湖区湖底公园2号',
    },
    {
      key: '3',
      name: '胡彦斌',
      sex: '男',
      age: 32,
      address: '西湖区湖底公园3号',
    },
    {
      key: '4',
      name: '胡彦祖',
      sex: '女',
      age: 42,
      address: '西湖区湖底公园4号',
    },
    {
      key: '5',
      name: '胡彦斌',
      sex: '男',
      age: 32,
      address: '西湖区湖底公园5号',
    },
    {
      key: '6',
      name: '胡彦祖',
      sex: '女',
      age: 42,
      address: '西湖区湖底公园6号',
    },
    {
      key: '7',
      name: '胡彦斌',
      sex: '男',
      age: 32,
      address: '西湖区湖底公园7号',
    },
    {
      key: '8',
      name: '胡彦祖',
      sex: '女',
      age: 42,
      address: '西湖区湖底公园8号',
    },
    {
      key: '9',
      name: '胡彦斌',
      sex: '男',
      age: 32,
      address: '西湖区湖底公园9号',
    },
    {
      key: '10',
      name: '胡彦祖',
      sex: '女',
      age: 42,
      address: '西湖区湖底公园10号',
    },
    {
      key: '11',
      name: '胡彦斌',
      sex: '男',
      age: 32,
      address: '西湖区湖底公园11号',
    },
    {
      key: '12',
      name: '胡彦祖',
      sex: '女',
      age: 42,
      address: '西湖区湖底公园12号',
    },
    {
      key: '13',
      name: '胡彦祖',
      sex: '女',
      age: 42,
      address: '西湖区湖底公园13号',
    },
    {
      key: '14',
      name: '胡彦斌',
      sex: '男',
      age: 32,
      address: '西湖区湖底公园14号',
    },
    {
      key: '15',
      name: '胡彦祖',
      sex: '女',
      age: 42,
      address: '西湖区湖底公园15号',
    },
    {
      key: '16',
      name: '胡彦斌',
      sex: '男',
      age: 32,
      address: '西湖区湖底公园16号',
    },
    {
      key: '17',
      name: '胡彦祖',
      sex: '女',
      age: 42,
      address: '西湖区湖底公园17号',
    },
    {
      key: '18',
      name: '胡彦斌',
      sex: '男',
      age: 32,
      address: '西湖区湖底公园18号',
    },
    {
      key: '19',
      name: '胡彦祖',
      sex: '女',
      age: 42,
      address: '西湖区湖底公园19号',
    },
    {
      key: '20',
      name: '胡彦祖',
      sex: '女',
      age: 42,
      address: '西湖区湖底公园20号',
    },
    {
      key: '21',
      name: '胡彦斌',
      sex: '男',
      age: 32,
      address: '西湖区湖底公园21号',
    },
    {
      key: '22',
      name: '胡彦祖',
      sex: '女',
      age: 42,
      address: '西湖区湖底公园22号',
    },
  ];
  
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
     title: '性别',
     dataIndex: 'sex',
     key: 'sex',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  useEffect(() => {
    request('/api/users',{
      method: 'get'
    })
    .then((response) => {
      setDataSource1(response.data)
    })
    .catch((error) => {
      console.log(error.message);
    });
  }, [])
  
  return (
    <>
      <Card title="基础表格">
      <Table 
        dataSource={dataSource} 
        columns={columns}
        bordered={true}
        pagination={false} 
      />
      </Card>
       
      <br/>

      <Card title="动态渲染表格">
      <Table 
        dataSource={dataSource1} 
        columns={columns}
        bordered={true}
        pagination={false} 
      />
      </Card>

      <br/>

      <Card title="单选表格">
        
      <Table 
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }} 
        dataSource={dataSource1} 
        columns={columns}
        bordered={true}
        pagination={false} 
      />
      </Card>

      <br/>

      <Card title="分页表格">
        
      <Table 
        dataSource={dataSource} 
        columns={columns}
        bordered={true}
        pagination={{
          defaultCurrent: 2,
          total: 22,
          showTotal:(total, range) => {
            return `总共${total}条`
          },
          showQuickJumper: true,
          showSizeChanger: true,
          onChange: (pageNumber) => {
            console.log('Page: ', pageNumber);
          },
          itemRender: (current, type, originalElement) => {
            if (type === 'prev') {
              return <a>Previous</a>;
            }
            if (type === 'next') {
              return <a>Next</a>;
            }
            return originalElement;
          },
          pageSizeOptions: ['3', '5', '10', '15']
        }}
      />
      </Card>
    </>
  )
}

export default Basic;