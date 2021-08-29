import { FC, useState } from 'react';
import { IRouteComponentProps } from 'umi'
import { Layout } from 'antd';
import Menu from './components/Menu';
import Header from './components/Header';
import Title from './components/Title';

const { Content, Footer, Sider } = Layout;

import './layout.less'


const Admin = (props: IRouteComponentProps) => {
   const [collapsed,setCollapased] = useState(false)

   const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setCollapased(collapsed);
   }

  return (
    <>
    <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
      collapsible collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div className="logo" />
      <Menu />
    </Sider>
    <Layout className="site-layout" style={!collapsed ? { marginLeft: 200, transition: '0.3s' } : {
       marginLeft: 80, transition: '0.2s' }}>
      <Header />
      <Title />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" >
          { props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
   </>
  )
}

Admin.wrappers = ['@/wrappers/auth']

export default Admin;