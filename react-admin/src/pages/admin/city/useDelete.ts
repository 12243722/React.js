import { Modal } from 'antd';
import { getCityList, delCityItem } from '@/utils/api';

const useDelete = (icon: any, setData: Function) => {
 // 删除数据
 const deleteItem = (item:any) => {
  return () => {
    Modal.confirm({
      title: `你确定要删除${item.city}这条记录吗?`,
      icon: icon,
      content: '',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      async onOk() {
        const res = await delCityItem({
          id: item._id
        })
        if(res.status === 0) {
          (async() => {
            const res = await getCityList()
            let list = res.result;
            list = list.map((item: any) => {
              return item = {...item,key: item._id}
            })
            setData(list);
            // setList(list);
          })()
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
}
   return {deleteItem}
}

export default useDelete;