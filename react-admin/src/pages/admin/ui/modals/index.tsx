import { FC, useState } from 'react';
import { Button, Space, Modal } from 'antd';
import Card from '../components/Cart';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;


const Modals: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);

      const showModal = () => {
        setIsModalVisible(true);
      };

      const handleOk = () => {
        setIsModalVisible(false);
      };

      const handleCancel = () => {
        setIsModalVisible(false);
      };



      const showModal2 = () => {
        setIsModalVisible2(true);
      };

      const handleOk2 = () => {
        setIsModalVisible2(false);
      };

      const handleCancel2 = () => {
        setIsModalVisible2(false);
      };


      const showModal3 = () => {
        setIsModalVisible3(true);
      };

      const handleOk3 = () => {
        setIsModalVisible3(false);
      };

      const handleCancel3 = () => {
        setIsModalVisible3(false);
      };

      const showConfirm = () => {   
        confirm({
          icon: <ExclamationCircleOutlined />,
          content: '欢迎来到德莱联盟',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });   
      }
      
  return (
    <Space className="Buttons" direction="vertical" style={{width: '100%'}}>
      <Card title="基础模态框">
          <Button type="primary" onClick={showModal}>Open</Button>
          <Modal 
            title="Basic Modal" 
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>


          <Button type="primary" onClick={showModal2}>自定义页脚</Button>
          <Modal 
            title="Basic Modal2" 
            visible={isModalVisible2}
            centered 
            footer={[
              <Button key="back" onClick={handleCancel2}>
              算了
            </Button>,
            <Button key="submit" type="primary"  onClick={handleOk2}>
              好的
            </Button>
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>

          <Button type="primary" onClick={showModal3}>
          Display a modal dialog at 20px to Top
          </Button>
            <Modal
              title="20px to Top"
              style={{ top: 20 }}
              visible={isModalVisible3}
              onOk={handleOk3}
              onCancel={handleCancel3}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
      </Card>
      <Card>
      <Button onClick={showConfirm}>Confirm</Button>
      </Card>
    </Space>
  )
}

export default Modals;