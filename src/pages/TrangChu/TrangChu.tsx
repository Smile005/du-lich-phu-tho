import React from 'react';
import styled from 'styled-components';
import VideoComponent from '../../components/VideoComponent';
import Frame01A from './Frame01A'
import Frame01B from './Frame01B';
import Frame01C from './Frame01C';

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
const Container = styled.div`
position: relative
width: 1920px;
height: 3629px;
background: #FFF;
`
const Content = styled.div`
position: absolute
width: 1920px;
height: 1080px;
flex-shrink: 0;
`
const Frame01 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 1920px;
height: 2549px;
flex-shrink: 0;
`
const Frame02 = styled.div`
display: inline-flex;
height: 690px;
flex-direction: column;
align-items: center;
gap: 42px;
flex-shrink: 0;
`

const TrangChu: React.FC = () => {
    return (
        <Container> 
            <VideoComponent />
            <Content>
                <Frame01>
                    <Frame01A />
                    <Frame01B posts={posts}/>
                    <Frame01C services={services}/>
                </Frame01>
                <Frame02>
                    
                </Frame02>
            </Content>
        </Container>
    );
};

export default TrangChu;    