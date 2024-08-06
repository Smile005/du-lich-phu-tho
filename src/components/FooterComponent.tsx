import React from 'react';
import styled from 'styled-components';
import { Layout, Row, Col } from 'antd';
import { MailFilled, PhoneFilled, EnvironmentFilled, FacebookFilled } from '@ant-design/icons';

const { Footer } = Layout;

const FooterContainer = styled(Footer)`
  background-color: #294360;
  color: #ffffff;
  padding: 40px 0;
`;

const FooterTitle = styled.h3`
  color: #ffffff;
`;

const FooterText = styled.p`
  margin: 5px 0;
`;

const FooterLink = styled.a`
  color: #ffffff;
  display: block;
  margin: 5px 0;
`;

const LogoContainer = styled.div`
  width: 464px;
  height: 93px;
  flex-shrink: 0;
`
const LogoText = styled.div`

`
const CompanyName = styled.p`
  color: var(--White, #FFF);
  font-family: "Helvetica Neue";
  font-size: 13.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const BrandName = styled.p`
  color: #9FF;

  font-family: "Helvetica Neue";
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.4px;
`
const Div01 = styled.div`
  display: flex;
  width: 438px;
  height: 210px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`
const FooterComponent: React.FC = () => {
  return (
    <FooterContainer>
      <div className="container">
        <Row justify="space-around">
          <Col span={8}>
           <Div01>
           <LogoContainer>
              <img src="/Logo.svg" alt="PhuThoTourist Logo" style={{ width: '140px', marginBottom: '89px', flexShrink: '0' }} />
              <LogoText>
                <p>CÔNG TY CỔ PHẦN DỊCH VỤ VÀ DU LỊCH PHÚ THỌ</p>
                <p>PHUTHOTOURIST</p>
              </LogoText>
            </LogoContainer>

            <FooterText>Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)</FooterText>
           </Div01>
          </Col>

          <Col span={8}>
            <FooterTitle>LIÊN HỆ</FooterTitle>
            <FooterText>
              <EnvironmentFilled /> 15 đường số 2, Cư xá Lữ Gia, Phường 15, Quận 11, TP. HCM
            </FooterText>
            <FooterText>
              <PhoneFilled style={{ rotate: '90deg' }} /> 02838650921
            </FooterText>
            <FooterText>
              <MailFilled />vanphong@damsenpark.vn
            </FooterText>
            <FooterText>
              <FacebookFilled /> Phuthotourist
            </FooterText>
          </Col>
          <Col span={8}>
            <FooterTitle>CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST</FooterTitle>
            <FooterLink href="#">Công viên Văn hóa Đầm Sen</FooterLink>
            <FooterLink href="#">Khu du lịch sinh thái Vàm Sát</FooterLink>
            <FooterLink href="#">Khách sạn Ngọc Lan (Quận 1)</FooterLink>
            <FooterLink href="#">Khách sạn Phú Thọ (Quận 11)</FooterLink>
            <FooterLink href="#">Trung tâm Du lịch Đầm Sen</FooterLink>
          </Col>
        </Row>
      </div>
    </FooterContainer>
  );
};

export default FooterComponent;
