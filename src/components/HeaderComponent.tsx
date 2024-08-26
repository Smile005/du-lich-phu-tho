import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Header } = Layout;

const Logo = styled.img`
  width: 72.192px;
  height: 72.192px;
  flex-shrink: 0;
`;

const StyledHeader = styled(Header)`
  width: 1920px;
  height: 120px;
  background-color: #1e3d6e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMenu = styled(Menu)`
  background-color: #1e3d6e;
  border-bottom: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .ant-menu-item {
    color: white !important;
  }
`;

const StyledText = styled.p`
  text-align: center;
  font-family: Philosopher;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

const HeaderComponent: React.FC = () => {
  const items = [
    {
      key: '1',
      label: (
        <Link to="/">
          <StyledText>TRANG CHỦ</StyledText>
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/posts">
          <StyledText>BÀI VIẾT</StyledText>
        </Link>
      ),
    },
    {
      key: '3',
      label: <Logo src="/Logo.svg" />,
    },
    {
      key: '4',
      label: (
        <Link to="/documents">
          <StyledText>TÀI LIỆU</StyledText>
        </Link>
      ),
    },
    {
      key: '5',
      label: (
        <Link to="/recruitment">
          <StyledText>TUYỂN DỤNG</StyledText>
        </Link>
      ),
    },
  ];

  return (
    <StyledHeader>
      <StyledMenu mode="horizontal" defaultSelectedKeys={['1']} items={items} />
    </StyledHeader>
  );
};

export default HeaderComponent;
