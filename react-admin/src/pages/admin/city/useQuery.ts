import {Form} from 'antd';
import {useState, useMemo } from 'react';
import {getCity} from '@/utils/api';

const useQuery = (data: any) => {
  const [form] = Form.useForm();
  const [chooseCity, setChooseCity] = useState('');
  const [chooseUseCar, setChooseUseCar] = useState('');
  const [chooseOperating, setChooseOperating] = useState('');
  const [cts, setCts] = useState([]);

 // 查询
 const onFinish = (values:any) => {
  setChooseCity(values.city || '')
  setChooseUseCar(values.useCar || '')
  setChooseOperating(values.operating || '')
}

// 查询
const handleChange = async (value:any) => {
if(value) {
  const res = await getCity()
  setCts(res.cts);
}
}

//查询
const onReset = () => {
form.resetFields();
setChooseCity('')
setChooseUseCar('')
setChooseOperating('')
// setList(data);
};

// 查询
const list1 = useMemo(() =>{
let newList: any = [...data];
newList = newList.filter((item:any) => {
  return item.city.includes(chooseCity) && item.useCar.includes(chooseUseCar)
   && item.operating.includes(chooseOperating)
})
return newList;
}, [chooseCity, chooseUseCar, chooseOperating, data])

return {
  form,
  cts,
  onFinish,
  handleChange,
  onReset,
  list1
}

}

export default useQuery;