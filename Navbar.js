// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const Navbar = () => {
  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          background: '#001529',
        }}
      >
        {/* Logo or Title */}
        <Title
          level={3}
          style={{
            color: 'white',
            margin: 0,
            marginRight: 'auto',
          }}
        >
          The Pet Palace
        </Title>

        {/* Navigation Menu */}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ flex: '1', justifyContent: 'end' }}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/appointments">Appoinments</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
