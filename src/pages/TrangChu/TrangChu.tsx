import React from 'react';
import styled from 'styled-components';

import { Section01 } from './Section01/Section01';
import Section02 from './Section02';
import { Section03 } from './Section03/Section03';
import { Section04 } from './Section04/Section04';
import './TrangChu.css';

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

const Container = styled.div`
    width: 1920px;
    height: 3629px;
    background: #FFF;
`
const Content = styled.div`
    width: 1920px;
    height: 1080px;
    flex-shrink: 0;
`

const TrangChu: React.FC = () => {
    return (
        <Container> 
            <Content>
                <Section01 />
                <Section02 />
                <Section03 posts={posts}/>
                <Section04/>
            </Content>
        </Container>
    );
};

export default TrangChu;    