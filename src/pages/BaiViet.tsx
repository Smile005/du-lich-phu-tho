import React from 'react';
import styled from 'styled-components';
import VideoComponent from '../components/VideoComponent';
import CustomTag from '../CustomTag/CustomTag';

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
padding-top: 168px;
flex-direction: column;
justify-content: flex-end;
align-items: center;
gap: 48px;
`
const Frame02 = styled.div`
`

const BaiViet: React.FC = () => {
    return (
        <Container>
            <VideoComponent />
            <Frame01>
                <CustomTag name='BÀI VIẾT' />

            </Frame01>
        </Container>
    )
}

export default BaiViet;