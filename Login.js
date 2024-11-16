import React from 'react';
import { Layout, Menu, Form, Input, Button, Typography } from 'antd';
import './Login.CSS';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const WelcomePage = () => {
  const onFinish = (values) => {
    console.log('Login Details:', values);
    // Handle login API call
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      

      {/* Content Section */}
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px 15px' }}>
        <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Title level={3} style={{ marginBottom: '20px' }}>Login</Title>

          {/* Login Form */}
          <Form layout="vertical" onFinish={onFinish} autoComplete="off">
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Enter your username" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>

          {/* Footer Text */}
          <Text>
            Don’t have an account? <a href="/register">Register here</a>
          </Text>
        </div>
      </Content>

      {/* Footer Section */}
      <Footer style={{ textAlign: 'center' }}>
        The Pet Palace ©2024 Created with Ant Design
      </Footer>
    </Layout>
  );
};

export default WelcomePage;
