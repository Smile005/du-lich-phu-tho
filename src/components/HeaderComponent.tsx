import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

const HeaderWrapper = styled(Header)`
  display: flex;
  width: 1920px;
  height: 120px;
  padding: 20px 519px 20px 531px;
  justify-content: center;
  align-items: center;
  gap: 80px;
  flex-shrink: 0;
`;

const Logo = styled.img`
  width: 72.192px;
  height: 72.192px;
  flex-shrink: 0;
`;

const StyledMenuItem = styled.p`
  color: #FFF;

text-align: center;
font-family: Philosopher;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;

  &:hover {
    color: #1890ff !important;
  }

  &.ant-menu-item-selected {
    color: #1890ff !important;
    border-bottom: 2px solid #1890ff;
  }
`;

const HeaderComponent: React.FC = () => {
  return (
    <HeaderWrapper>
        <StyledMenuItem key="1">TRANG CHỦ</StyledMenuItem>
        <StyledMenuItem key="2">BÀI VIẾT</StyledMenuItem>
        <StyledMenuItem key="logo" >
          <Logo src="/Logo.svg" alt="Logo" />
        </StyledMenuItem>
        <StyledMenuItem key="3">TÀI LIỆU</StyledMenuItem>
        <StyledMenuItem key="4">TUYỂN DỤNG</StyledMenuItem>

    </HeaderWrapper>
  );
};

export default HeaderComponent;
