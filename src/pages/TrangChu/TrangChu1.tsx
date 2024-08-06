import React from 'react';
import { Card, Col, Row, Button, Tag } from 'antd';
import styled from 'styled-components';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import Section02 from './Section02';

const { Meta } = Card;

const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #e0f7fa;
`;

const Title01 = styled.h2`
  color: #003366;
  margin-bottom: 10px;
`;

const SubTitle01 = styled.h3`
  color: #003366;
  margin-bottom: 20px;
  font-weight: 400;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 40px;
`;

const ViewMoreButton = styled(Button)`
  margin-top: 20px;
  background-color: #1890ff;
  color: white;
  border: none;
  &:hover {
    background-color: #40a9ff;
    color: white;
  }
`;
const Line = styled.div`
  width: 130px;
  height: 6px;
  border-radius: 100px;
  background: var(--blue-primary-600, #003F7D);
`;

const ServiceContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f0f2f5;
`;

const Title = styled.h2`
  color: #003366;
  margin-bottom: 10px;
`;

const SubTitle = styled.h3`
  color: #003366;
  margin-bottom: 20px;
  font-weight: 400;
`;

const posts = [
    {
        title: 'Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor',
        description: 'Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh...',
        image: '/img/img (3).png',
        tags: ['Sự kiện', 'Thông báo', 'Tin tức'],
        views: '10N lượt xem',
        date: '20/02/2022',
    },
    {
        title: 'Thông báo kết quả lựa chọn nhà cung cấp nước đá chế tác Bằng Đăng',
        description: 'Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các đơn vị tham gia chào giá cạnh tranh...',
        image: '/img/img (4).png',
        tags: ['Sự kiện', 'Thông báo', 'Tin tức'],
        views: '10N lượt xem',
        date: '20/02/2022',
    },
    {
        title: 'Thông báo mời chào hàng cạnh tranh 2 màn hình Led P4 Outdoor Fullcolor',
        description: 'Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo mời chào hàng cạnh tranh lựa chọn đơn vị cung cấp...',
        image: '/img/img (5).png',
        tags: ['Sự kiện', 'Thông báo', 'Tin tức'],
        views: '10N lượt xem',
        date: '20/02/2022',
    },
];

const services = [
    {
        title: 'Vui chơi giải trí',
        description: 'Với 2 khu giải trí nổi tiếng TPHCM là Công viên văn hóa Đầm Sen, và khu du lịch sinh thái Vàm Sát (H.Cần Giờ)...',
        image: '/img/img.png',
    },
    {
        title: 'Nhà hàng – Khách sạn',
        description: 'Với hệ thống khách sạn Phú Thọ và Ngọc Lan đạt chuẩn 3 sao, chuyên tiếp đón các đoàn thể thao...',
        image: '/img/img (1).png',
    },
    {
        title: 'Dịch vụ Lữ hành',
        description: 'Tổ chức các tour trong và ngoài nước với Trung tâm Dịch vụ du lịch Đầm Sen. Ngoài ra Trung tâm còn thể mạnh là tổ chức...',
        image: '/img/img (2).png',
    },
];

const TrangChu: React.FC = () => {
    return (
        <div>
            <HeaderComponent />
            
            <Section02 />
            <Container>
                <Title01>CHIA SẺ THÔNG TIN</Title01>
                <SubTitle01>Bài viết mới</SubTitle01>
                <Line />
                <Description>
                    Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch
                </Description>
                <Row gutter={[16, 16]} justify="center">
                    {posts.map((post, index) => (
                        <Col xs={24} sm={12} md={8} key={index}>
                            <Card
                                hoverable
                                cover={<img alt={post.title} src={post.image} />}
                                bordered={index === 0} // Đánh dấu bài viết nổi bật với border khác
                                style={index === 0 ? { borderColor: '#ff9900' } : {}}
                            >
                                <Meta title={post.title} description={post.description} />
                                <div style={{ marginTop: '10px' }}>
                                    {post.tags.map(tag => (
                                        <Tag color="blue" key={tag}>{tag}</Tag>
                                    ))}
                                </div>
                                <div style={{ marginTop: '10px', color: '#666' }}>
                                    {post.views} • {post.date}
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <ViewMoreButton size="large">Xem thêm bài viết</ViewMoreButton>
            </Container>


            <ServiceContainer>
                <Title>LĨNH VỰC HOẠT ĐỘNG</Title>
                <SubTitle>Các dịch vụ trọng tâm</SubTitle>
                <p>3 dịch vụ trọng tâm của Phuthotourist là vui chơi giải trí, nhà hàng – khách sạn, và dịch vụ lữ hành</p>
                <Row gutter={[16, 16]} justify="center">
                    {services.map((service, index) => (
                        <Col xs={24} sm={12} md={8} key={index}>
                            <Card
                                hoverable
                                cover={<img alt={service.title} src={service.image} />}
                            >
                                <Meta title={service.title} description={service.description} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </ServiceContainer>
            <FooterComponent />
        </div>


    );
};

export default TrangChu;

