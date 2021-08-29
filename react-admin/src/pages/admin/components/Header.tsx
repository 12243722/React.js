import {FC} from 'react';
import { Layout } from 'antd';
import { useHistory } from 'umi';

import { Typography, Space } from 'antd';
const { Text, Link } = Typography;

const LayoutHeader: FC = () => {
  const history = useHistory();

  const exit = () => {
      localStorage.clear()
        history.push('/login')
  }
  return (
    <Layout.Header 
      className="site-layout-background"
      style={{ padding: '0 20px', textAlign: 'right', borderBottom: '1px solid #1DA57A' }}
     >
    <Text style={{marginRight: 30}}>欢迎你，如神</Text>
    <Link onClick={exit}>
      退出
    </Link>
    </Layout.Header>
  ) 
}

export default LayoutHeader;