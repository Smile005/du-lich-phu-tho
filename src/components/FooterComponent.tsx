import React from 'react';
import { Layout } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, FacebookOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  background-color: #2d3e50;
  color: white;
  padding: 20px 50px;
  text-align: left;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterSection = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const FooterLogo = styled.img`
  width: 100px;
  margin-bottom: 10px;
`;

const CompanyName = styled.p`
  font-size: 1.2em;
  font-weight: bold;
`;

const SectionTitle = styled.h3`
  color: #8da6c1;
  font-size: 1.1em;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  color: #c0c9d6;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;

  & i {
    margin-right: 10px;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  color: #c0c9d6;
`;

const FooterListItem = styled.li`
  margin-bottom: 5px;
`;

const CopyrightText = styled.p`
  color: #8da6c1;
  margin-top: 10px;
`;

const AppFooter: React.FC = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterSection>
          <FooterLogo src="/Logo.svg" alt="Logo" />
          <CompanyName>CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ</CompanyName>
          <CompanyName>PHUTHOTOURIST</CompanyName>
          <CopyrightText>Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)</CopyrightText>
        </FooterSection>
        <FooterSection>
          <SectionTitle>LIÊN HỆ</SectionTitle>
          <FooterText><EnvironmentOutlined /> 15 Đường số 2, Cư xá Lữ Gia, Phường 15, Quận 11, TP. HCM</FooterText>
          <FooterText><PhoneOutlined style={{rotate: "90reg"}}/> 02838650921</FooterText>
          <FooterText><MailOutlined /> vanphong@damsenpark.vn</FooterText>
          <FooterText><FacebookOutlined /> Phuthotourist</FooterText>
        </FooterSection>
        <FooterSection>
          <SectionTitle>CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST</SectionTitle>
          <FooterList>
            <FooterListItem>Công viên Văn hóa Đầm Sen</FooterListItem>
            <FooterListItem>Khu du lịch sinh thái Vàm Sát</FooterListItem>
            <FooterListItem>Khách sạn Ngọc Lan (Quận 1)</FooterListItem>
            <FooterListItem>Khách sạn Phú Thọ (Quận 11)</FooterListItem>
            <FooterListItem>Trung tâm Du lịch Đầm Sen</FooterListItem>
          </FooterList>
        </FooterSection>
      </FooterContainer>
    </StyledFooter>
  );
};

export default AppFooter;
