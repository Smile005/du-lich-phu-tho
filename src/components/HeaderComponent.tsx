import React from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

const HeaderWrapper = styled(Header)`
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 20px;
`;

const NavMenu = styled(Menu)`
  background-color: #2c3e50;
  border-bottom: none;
  color: white;
  display: flex;
  justify-content: center;
  flex: 1;

  .ant-menu-item {
    margin: 0 20px;
    font-weight: bold;
  }

  .ant-menu-item:hover {
    border-bottom: 2px solid #1890ff;
  }
`;

const HeaderComponent: React.FC = () => {
  return (
    <HeaderWrapper>
      <NavMenu mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">TRANG CHỦ</Menu.Item>
        <Menu.Item key="2">BÀI VIẾT</Menu.Item>
        <Menu.Item key="logo" disabled>
          <Logo src="/Logo.svg" alt="Logo" />
        </Menu.Item>
        <Menu.Item key="3">TÀI LIỆU</Menu.Item>
        <Menu.Item key="4">TUYỂN DỤNG</Menu.Item>
      </NavMenu>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
