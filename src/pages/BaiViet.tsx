import React from 'react';
import styled from 'styled-components';
import { News } from '../type/news';
import VideoComponent from '../components/VideoComponent';
import CustomTag from '../components/CustomTag';
import Sidebar from '../components/BaiVietComp02';
import BaiVietComp01 from '../components/BaiVietComp01';

const Container = styled.div`
position: relative;
width: 1920px;
height: 2013px;
background: #FFF;
`
const Frame01 = styled.div`
display: flex;
width: 1920px;
padding-top: 48px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 48px;
`
const Frame02 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 1920px;
height: 2092px;
`
const Frame03 = styled.div`
width: 1134px;
height: 604px;
flex-shrink: 0;
border-radius: 12px;
box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
backdrop-filter: blur(7.5px);
`
const Frame04 = styled.div`
width: 362px;
height: 603px;
flex-shrink: 0;
border-radius: 8px;
background: rgba(255, 255, 255, 0.70);

/* shadow bai moi */
box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
backdrop-filter: blur(7.5px);
`
const Frame05 = styled.div`
width: 1520px;
height: 1108px;
flex-shrink: 0;
`
type NewsProps = {
    news: News[]
}
const BaiViet: React.FC<NewsProps> = (props) => {
    return (
        <Container>
            <VideoComponent />
            <Frame01>
                <CustomTag name='BÀI VIẾT' />
                <Frame02>
                    <BaiVietComp01 news={props.news}/>
                    <Sidebar news={props.news}/>
                </Frame02>
            </Frame01>
        </Container>
    )
}

export default BaiViet;