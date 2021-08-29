import {useState} from 'react';
import {Table, Card, Radio, Divider, Button, Modal, Form, Input, Select, DatePicker, message} from 'antd';
import moment from 'moment';
import { getCityList, addCityItem} from '@/utils/api';

const useAdd = (setData: Function) => {

  const [addForm] = Form.useForm();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
 // 新增
  // 新增打开模态框
  const modelShow = (): void => {
    setIsModalVisible(true);
  }

  // 新增
  // 模态框确定的回调
  const handleOk = async(): Promise<void> => {
    // setIsModalVisible(false);
    let values = addForm.getFieldsValue()
    values = {
      ...values,
      openTime: moment(values.openTime).valueOf(),
      handleTime: Date.now()
    }
    const res = await addCityItem({...values});
    if(res.status === 0) {
      setIsModalVisible(false);
      (async() => {
        const res = await getCityList()
        let list = res.result;
        list = list.map((item: any) => {
          return item = {...item,key: item._id}
        })
        setData(list);
        // setList(list);
      })()
    } else {
      message.error(res.msg);
    }
  };
  
  // 新增
  // 模态框取消的回调
  const handleCancel = (): void => {
    setIsModalVisible(false);
  };
  return {
    addForm,
    isModalVisible,
    modelShow,
    handleOk,
    handleCancel
  }
}

export default useAdd;