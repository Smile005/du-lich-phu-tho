import React from 'react';
import styled from 'styled-components';
import { News } from '../../type/news';
import VideoComponent from '../../components/VideoComponent';
import CustomTag from '../../components/CustomTag';
import Sidebar from '../../components/BaiVietComp02';
import BaiVietComp01 from '../../components/BaiVietComp01';
import FilterComponent from './FilterComponent';
import SearchComponent from './SearchComponent';
import CustomCard from '../../components/CustomCard/CustomCard';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  width: 1920px;
  height: 2513px;
  background: #FFF;
`;

const Frame01 = styled.div`
  display: flex;
  width: 1920px;
  padding-top: 48px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

const Frame02 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1920px;
  height: 2092px;
`;

const Frame03 = styled.div`
  width: 1134px;
  height: 604px;
  flex-shrink: 0;
  border-radius: 12px;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(7.5px);
`;

const Frame04 = styled.div`
  width: 362px;
  height: 603px;
  flex-shrink: 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.70);
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(7.5px);
`;

const Frame05 = styled.div`
  width: 1520px;
  height: 1108px;
  flex-shrink: 0;
`;

const MainFrame = styled.div`
  position: absolute;
  padding-top: 300px;
  width: 1520px;
  height: 1108px;
  flex-shrink: 0;
`;

const Frame08 = styled.div`
  position: absolute;
  right: 0px;
  display: flex;
  width: 1134px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const BaiViet: React.FC = () => {
  const news = useSelector((state: RootState) => state.news.news);
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/chitietbaiviet/${id}`);
  };

  const newsRows = [];
  for (let i = 0; i < news.length; i += 3) {
    newsRows.push(news.slice(i, i + 3));
  }

  return (
    <Container>
      <VideoComponent />
      <Frame01>
        <CustomTag name='BÀI VIẾT' />
        <Frame02>
          <BaiVietComp01 news={news} />
          <Sidebar news={news} />
        </Frame02>
        <MainFrame>
          <FilterComponent />
          <Frame08>
            <SearchComponent />
            <div style={{ width: "1134px" }}>
              {newsRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}
                >
                  {row.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      style={{ margin: "5px", display: "flex", alignItems: "center" }}
                      onClick={() => handleCardClick(item.id)} // Sử dụng `item.id` để chuyển hướng
                    >
                      <CustomCard data={item} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Frame08>
        </MainFrame>
      </Frame01>
    </Container>
  );
};

export default BaiViet;
