import React from 'react';
import styled from 'styled-components';
import VideoComponent from '../../components/VideoComponent';
import Frame01A from './Frame01A'
import Frame01B from './Frame01B';
import Frame01C from './Frame01C';
import Frame02A from './Frame02A';

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
position: relative;
width: 1920px;
height: 3629px;
background: #FFF;
`
const Content = styled.div`
position: absolute;
padding-top: 48px;
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
const MidArrow = styled.div`
display: flex;
width: 32px;
height: 32px;
padding: 9px 16px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
`
const TrangChu: React.FC = () => {
    return (
        <Container>
            <VideoComponent />
            <Content>
                <Frame02A />
                <MidArrow>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                        <path d="M24.5 12L13 22L1.5 12" stroke="#F0F0F0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M24.5 2L13 12L1.5 2" stroke="#F0F0F0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </MidArrow>
                <Frame01>
                    <Frame01A />
                    <Frame01B posts={posts} />
                    <Frame01C services={services} />
                </Frame01>               
            </Content>
        </Container>
    );
};

export default TrangChu;    