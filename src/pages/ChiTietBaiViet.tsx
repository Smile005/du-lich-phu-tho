import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import styled from 'styled-components';
import { Card, Row, Col, Tag } from 'antd';
import VideoComponent from '../components/VideoComponent';
import { News } from '../type/news';

const { Meta } = Card;

const Container = styled.div`
    position: relative;
    width: 1920px;
    height: 3435px;
    background: #FFF;
`
const Frame01 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 80px;
`
const Frame02 = styled.div`
display: flex;
padding: 48px;
flex-direction: column;
align-items: flex-start;
gap: 48px;

border-radius: 20px;
background: rgba(255, 255, 255, 0.70);
box-shadow: 0px 2px 32px 0px rgba(0, 0, 0, 0.20);
backdrop-filter: blur(7.5px);
`
const Frame03 = styled.div`
display: flex;
padding-right: 38px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 2px;

width: 1214px;
color: var(--blue-primary-500, #0054A6);
font-family: Roboto;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 80px; /* 166.667% */
`
const StyledText03 = styled.div`
color: var(--gray-gray-500, #666);

/* Roboto/16px: Regular */
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 21px; /* 131.25% */
`
const Frame04 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 32px;
`
const StyledText04 = styled.div`
width: 1200px;
align-self: stretch;
color: var(--gray-gray-700, #333);

/* Roboto/18px: Regular */
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 27px */
`
const Frame05 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
`
const StyledText05 = styled.div`
color: var(--blue-primary-500, #0054A6);
font-family: Roboto;
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 36px; /* 112.5% */
`
const StyledCard = styled(Card)`
  border-radius: 10px;
  overflow: hidden;
   width: 301px;
height: 292px;
flex-shrink: 0; 

  img {
    border-radius: 10px 10px 0 0;
  }
`;

const StyledTag = styled(Tag)`
  margin-bottom: 8px;
`;

const StyledRow = styled(Row)`
  margin-top: 16px;
`;

const ChiTietBaiViet: React.FC = () => {
    const news = useSelector((state: RootState) => state.news.news);
    const { index } = useParams<{ index: string }>();
    
    // Use the index directly as a string
    const baiViet = news.find(item => item.id === index);
    
    if (!baiViet) {
        return <div>Bài viết không tồn tại.</div>;
    }

    return (
        <Container>
            <VideoComponent />
            <Frame01>
                <Frame02>
                    <Frame03>
                        {baiViet.title}
                        <StyledText03>
                            by {baiViet.author || "Admin"} on {baiViet.date || "N/A"}
                        </StyledText03>
                    </Frame03>
                    <Frame04>
                        <img src={baiViet.image || '/default.png'} alt="" />
                        <StyledText04>
                            {baiViet.news}
                        </StyledText04>
                        <img src="/image 35.png" alt="" style={{ width: '831px', height: '747px' }} />
                    </Frame04>
                    <Frame05>
                        <StyledText05>Bài viết liên quan</StyledText05>
                        <StyledRow gutter={[16, 16]}>
                            {posts.map((post, index) => (
                                <Col xs={24} sm={12} md={12} lg={6} key={index}>
                                    <StyledCard
                                        hoverable
                                        cover={<img alt={post.title} src={post.imageUrl} />}
                                    >
                                        <div>
                                            {post.tags.map((tag, idx) => (
                                                <StyledTag color="blue" key={idx}>
                                                    {tag}
                                                </StyledTag>
                                            ))}
                                        </div>
                                        <Meta title={post.title} description={post.date} />
                                        <div>{post.views}</div>
                                    </StyledCard>
                                </Col>
                            ))}
                        </StyledRow>
                    </Frame05>
                </Frame02>
            </Frame01>
        </Container>
    );
};

export default ChiTietBaiViet;

const posts = [
    {
        title: 'Thông báo: đấu giá giữ xe tại CVVH Đầm Sen',
        date: '20/02/2022',
        imageUrl: '/DuLichDamSen.png', // Replace with actual image URL
        tags: ['Sự kiện', 'Thông báo', 'Tin tức'],
        views: '10N lượt xem',
    },
    {
        title: 'Thông báo: đấu giá giữ xe tại CVVH Đầm Sen',
        date: '20/02/2022',
        imageUrl: '/DuLichDamSen.png', // Replace with actual image URL
        tags: ['Sự kiện', 'Thông báo', 'Tin tức'],
        views: '10N lượt xem',
    },
    {
        title: 'Thông báo: đấu giá giữ xe tại CVVH Đầm Sen',
        date: '20/02/2022',
        imageUrl: '/DuLichDamSen.png', // Replace with actual image URL
        tags: ['Sự kiện', 'Thông báo', 'Tin tức'],
        views: '10N lượt xem',
    },
    {
        title: 'Thông báo: đấu giá giữ xe tại CVVH Đầm Sen',
        date: '20/02/2022',
        imageUrl: '/DuLichDamSen.png', // Replace with actual image URL
        tags: ['Sự kiện', 'Thông báo', 'Tin tức'],
        views: '10N lượt xem',
    },
];