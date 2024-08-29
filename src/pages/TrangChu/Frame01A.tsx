import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
display: inline-flex;
flex-direction: row;
width: 1520px;
height: 701px;
background: rgba(255, 255, 255, 0.70);
backdrop-filter: blur(7.5px);
`
const Frame01 = styled.div`
display: inline-flex;
flex-direction: column;
width:700px;
align-items: flex-start;
gap: 32px;
`
const Frame01a = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
`
const Text01aa = styled.div`
color: var(--gray-gray-600, #4D4D4D);
text-align: center;
/* Roboto/20px: Medium */
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
const Text01ab = styled.div`
color: var(--blue-primary-600, #003F7D);
leading-trim: both;
text-edge: cap;
font-family: Philosopher;
font-size: 44px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Rectangle01 = styled.div`
width: 154px;
height: 6px;
`
const Frame01b = styled.div`
display: flex;
align-items: flex-start;
gap: 19px;
`
const Button01a = styled(Button)`
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

 &:hover {
    background-color: #0054A6;
  }

  &:focus {
    background-color: #0054A6;
    outline: none;
  }

  &.ant-btn-primary {
    box-shadow: none; /* Remove shadow if it's a primary button */
  }
`
const Vectot01b = styled.div`
width: 0px;
align-self: stretch;
stroke-width: 2px;
stroke: var(--blue-primary-300, #6698CA);
`
const Text01b = styled.div`
width: 675px;
color: var(--gray-gray-700, #333);

/* Roboto/20px: Regular */
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: left;
`
const Frame02 = styled.div`
position: relative;
display: flex;
flex-direction: row;
width: 619px;
height: 599px;
flex-shrink: 0;
`
const Img01 = styled.div`
position: absolute;
top: 46px;
width: 487px;
height: 311px;
flex-shrink: 0;
border-radius: 26.712px;
background: url('/Frame01a.png') 50% / cover no-repeat;
`
const Img02 = styled.div`
position: absolute;
top: 259px;
left: 67px;
width: 552px;
height: 340px;
flex-shrink: 0;
border-radius: 26.712px;
background: url('/Frame01b.png') 50% / cover no-repeat;
`
const Frame01A: React.FC = () => {
  return (
    <Container>
      <Frame01>
        <Frame01a>
          <Text01aa>VỀ CHÚNG TÔI</Text01aa>
          <Text01ab>Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu cầu của bạn!</Text01ab>
          <Rectangle01 />
        </Frame01a>
        <Frame01b>
          <Vectot01b>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="288" viewBox="0 0 2 288" fill="none">
              <path d="M1 0V288" stroke="#6698CA" stroke-width="2" />
            </svg>
          </Vectot01b>
          <Text01b>
            Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn vị thành viên của Saigontourist.
            Phuthotourist được biết đến với các sản phẩm du lịch nổi tiếng tại TP.HCM (Quận 11) như:
            <ul>
              <li> Công viên Văn hóa Đầm Sen</li>
              <li> Khu du lịch sinh thái Vàm Sát</li>
              <li> Khách sạn Ngọc Lan</li>
              <li> Khách sạn Phú Thọ</li>
              <li> Trung tâm chăm sóc sức khỏe & giải trí Đầm Sen (Damsen Plaza)</li>
              <li> Nhà hàng Thủy Tạ Đầm Sen</li>
              <li> Cà phê Vườn Đá</li>
              <li> Trung tâm Dịch vụ Du lịch Đầm Sen (Damsen Travel)</li>
              <li> Liên kết với Công viên nước Đầm Sen (Đầm Sen Water Park).</li>
            </ul>
          </Text01b>
        </Frame01b>
        <Button01a>Xem chi tiết</Button01a>
      </Frame01>
      <Frame02>
        <Img01 />
        <Img02 />
      </Frame02>
    </Container>
  );
};

export default Frame01A;
