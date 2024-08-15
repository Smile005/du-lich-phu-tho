import React from 'react';
import styled from 'styled-components';
import DocumentTable from '../components/DocumentTable';
import VideoComponent from '../components/VideoComponent';
import CustomTag from '../components/CustomTag';
import { FileTextOutlined } from '@ant-design/icons';

const Container = styled.div`
position: relative;
width: 1920px;
height: 2289px;
background: #FFF;
`
const Frame01 = styled.div`
position: absolute;
display: flex;
width: 1920px;
padding-top: 48px;
flex-direction: column;
justify-content: flex-end;
align-items: center;
gap: 48px;
`
const Frame02 = styled.div`
display: inline-flex;
flex-direction: column;
align-items: flex-start;
gap: 22px;
`
const Frame03 = styled.div`
display: flex;
width: 774.333px;
height: 261px;
justify-content: center;
align-items: flex-start;
gap: 22.111px;
`
const Frame04 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 177px;
height: 261px;
flex-shrink: 0;
border-radius: 12px;
box-shadow: 0px 1.776px 7.102px 0px rgba(0, 0, 0, 0.25);

    background-image: url('/img.png');
    background-size: cover; 
    background-position: center; 
`

const renderFrames01 = () => {
    const frames = [];

    for (let i = 0; i < 4; i++) {
        frames.push(
            <Frame04 key={i}>
                <FileTextOutlined style={{ fontSize: '60px' }} />
                <p style={{ color: 'white' }}>
                    Báo cáo Tài Chính năm 2022-2023
                </p>
            </Frame04>
        );
    }

    return frames;
};

const TaiLieu = () => {
    return (
        <Container>
            <VideoComponent />
            <Frame01>
                <CustomTag name='TÀI LIỆU' />
                <Frame02>
                    <Frame03>
                        {renderFrames01()}
                    </Frame03>
                    <Frame03>
                        {renderFrames01()}
                    </Frame03>
                </Frame02>
                <DocumentTable />
            </Frame01>
        </Container>
    )
}

export default TaiLieu;