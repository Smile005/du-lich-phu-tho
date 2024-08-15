import React from 'react';
import styled from 'styled-components';
import { News } from '../type/news';

const Container = styled.div`
width: 1134px;
height: 604px;
flex-shrink: 0;
border-radius: 12px;
box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
backdrop-filter: blur(7.5px);
  background: #FFF;
`;

const ImageWrapper = styled.div`
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 20px;

`;

const Title = styled.h2`
  font-size: 24px;
  color: #1f4e79;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
    cursor: pointer;

    &.active {
      background-color: #1f4e79;
    }
  }
`;

type NewsProps = {
    news: News[]
}
const BaiVietComp01: React.FC<NewsProps> = ({news}) => {
  return (
    <Container>
      <ImageWrapper>
        <img src="https://firebasestorage.googleapis.com/v0/b/my-first-firebase-75799.appspot.com/o/DuLichDamSen.png?alt=media&token=b6e9ff9e-6fe6-4a55-a65d-8a507f152700" alt="Băng Đăng" />
      </ImageWrapper>
      <Content>
        <Title>Thông báo mời chào giá cạnh tranh cung cấp nước đá chế tác Băng Đăng</Title>
        <Description>
          THÔNG BÁO MỜI CHÀO GIÁ CẠNH TRANH CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
          tổ chức chào giá cạnh tranh lựa chọn đơn vị Cung cấp nước đá để chế tác Băng Đăng
          tại Công viên Văn hóa Đầm Sen.
        </Description>
      </Content>
      <CarouselIndicators>
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </CarouselIndicators>
    </Container>
  );
};

export default BaiVietComp01;
