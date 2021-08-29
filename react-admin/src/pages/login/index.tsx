import { FC } from 'react';
import { useParams } from 'umi';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { login } from '@/utils/api';
import { useHistory } from 'umi';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const history = useHistory();

  const onFinish =async (values:any) => {
    const res = await login(values);
    if (res.status === 0) {
      localStorage.setItem('token', res.result[0]._id);
      localStorage.setItem('auth', JSON.stringify(res.result[0].auth));
      history.push('/admin/welcome');
    } else {
      message.error(res.msg);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{width: 500, margin: '100px auto'}}>
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Login;