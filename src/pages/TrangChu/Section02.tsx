import React from 'react';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import './Section02.css';
import SideImage from '../../components/SideImage/SideImage';

const Container = styled.div`
  display: flex;
  width: 1520px;
  height: 701px;
  background: rgba(255, 255, 255, 0.70);
  backdrop-filter: blur(7.5px);
`
const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`
const Text01 = styled.p`
  color: var(--gray-gray-600, #4D4D4D);
  text-align: center;
  /* Roboto/20px: Medium */
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
const Line = styled.div`
  width: 154px;
  height: 6px;
  border-radius: 100px;
  background: var(--blue-primary-600, #003F7D);
`
const Text02 = styled.p`
  color: var(--blue-primary-600, #003F7D);
  leading-trim: both;
  text-edge: cap;
  font-family: Philosopher;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const Text03 = styled.p`
  color: var(--gray-gray-700, #333);
  /* Roboto/20px: Regular */
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const CustomButton = styled(Button)`
  display: flex;
  height: 44px;
  padding: 0px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: var(--blue-primary-500, #0054A6);
  color: #FFF;
  /* Roboto/18px: Medium */
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
const Section02: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>
          <Text01>VỀ CHÚNG TÔI</Text01>
          <Text02>Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu cầu của bạn!</Text02>
          <Line />
        </Title>
        <Text03>
          Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn vị thành viên của Saigontourist. 
          Phuthotourist được biết đến với các sản phẩm du lịch nổi tiếng tại TP.HCM (Quận 11) như: 
        </Text03>
        <Text03>Công viên Văn hóa Đầm Sen Khu du lịch sinh thái Vàm Sát </Text03>
        <Text03>Khách sạn Ngọc Lan Khách sạn Phú Thọ </Text03>
        <Text03>Trung tâm chăm sóc sức khỏe & giải trí Đầm Sen (Damsen Plaza) </Text03>
        <Text03>Nhà hàng Thủy Tạ Đầm Sen </Text03>
        <Text03>Cà phê Vườn Đá Trung tâm Dịch vụ Du lịch Đầm Sen (Damsen Travel)</Text03>         
        <Text03>Liên kết với Công viên nước Đầm Sen (Đầm Sen Water Park).</Text03>
        <CustomButton>Xem chi tiết</CustomButton>
      </Content>
      <SideImage/>
    </Container>
  );
};

export default Section02;
