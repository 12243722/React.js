import { Menu } from 'antd';
// import { BaseSyntheticEvent } from 'react';
import { useHistory, useDispatch } from 'umi';
import { useCallback } from 'react';
import { 
  MailOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
 } from '@ant-design/icons';

const { SubMenu } = Menu;

export const menuList = [
  {
    title: '首页',
    key: '/admin/welcome',
    icon: <MailOutlined />,
    auth: '1'
  },
  {
    title: 'UI',
    key: '/admin/ui',
    icon: <AppstoreOutlined />,
    auth: '2',
    children: [
      {
        title: '按钮',
        key: '/admin/ui/buttons',
        auth: '12',
      },
      {
        title: '弹框',
        key: '/admin/ui/modals',
        auth: '13',
      },
      {
        title: 'Loading',
        key: '/admin/ui/loadings',
        auth: '14',
      },
      {
        title: '通知提醒',
        key: '/admin/ui/notification',
        auth: '15',
      },
      {
        title: '全局Message',
        key: '/admin/ui/messages',
        auth: '16',
      },
      {
        title: 'Tab页签',
        key: '/admin/ui/tabs',
        auth: '17',
      },
      {
        title: '图片画廊',
        key: '/admin/ui/gallery',
        auth: '18',
      },
      {
        title: '轮播图',
        key: '/admin/ui/carousel',
        auth: '19',
      }
    ]
  },
  {
    title: '表单',
    key: '/admin/form',
    icon: <BarChartOutlined />,
    auth: '3',
    children: [
      {
        title: '登录',
        key: '/admin/form/login',
        auth: '20',
      },
      {
        title: '注册',
        key: '/admin/form/reg',
        auth: '21',
      }
    ]
  },
  {
    title: '表格',
    key: '/admin/table',
    icon: <CloudOutlined />,
    auth: '4',
    children: [
      {
        title: '基础表格',
        key: '/admin/table/basic',
        auth: '22',
      },
      {
        title: '高级表格',
        key: '/admin/table/high',
        auth: '23',
      }
    ]
  },
  {
    title: '富文本',
    key: '/admin/rich',
    auth: '5',
    icon: <ShopOutlined />,
  },
  {
    title: '城市管理',
    key: '/admin/city',
    auth: '6',
    icon: <TeamOutlined />,
  },
  {
    title: '订单管理',
    key: '/admin/order',
    icon: <UserOutlined />,
    auth: '7',
    children: [
      {
        title: '订单详情',
        key: '/admin/order/detail',
        auth: '24',
      },
      {
        title: '结束订单',
        key: '/admin/order/finish',
        auth: '25',
      }
    ]
  },
  {
    title: '员工管理',
    key: '/admin/user',
    icon: <UploadOutlined />,
    auth: '8',
  },
  {
    title: '车辆地图',
    key: '/admin/bikeMap',
    icon: <VideoCameraOutlined />,
    auth: '9',
  },
  {
    title: '图标',
    key: '/admin/charts',
    icon: <UploadOutlined />,
    auth: '10',
  },
  {
    title: '权限设置',
    key: '/admin/permission',
    icon: <MailOutlined />,
    auth: '11',
  },
];

const LayoutMenu = () => {
const history = useHistory();
const dispatch = useDispatch();

// 数组
const auth = JSON.parse(localStorage.getItem('auth') || '')

  const handleClick = useCallback((e:any) => {
      // dispatch({
      //   type: 'admin/changeTitle',
      //   payload: e.domEvent.target.innerText
      // })
      history.push(e.key)
    },[])

  return (
    <Menu onClick={handleClick}  mode="vertical" theme="dark">
      {
        menuList.map(item =>{
         if (auth.includes(item.auth)) { 
          if(item.children) {
            return ( 
            <SubMenu key={item.key} icon={item.icon} title={item.title}>
             {
               item.children.map(child => {
                 if (auth.includes(child.auth)) {
                   return (
                     <Menu.Item key={child.key} >{child.title}</Menu.Item>
                   )
                 } else {
                   return null
                 }
               })
             }
          </SubMenu>
          )
          } else {
          return <Menu.Item key={item.key} icon={item.icon} >{item.title}</Menu.Item>
          }
         } else {
           return null
         }
        })
      }
      {/* <Menu.Item key="111" icon={<MailOutlined />}>Option 1</Menu.Item>
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu> */}
  </Menu>
  )
}

export default LayoutMenu;