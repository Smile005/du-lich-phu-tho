import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: inline-flex;
height: 690px;
flex-direction: column;
align-items: center;
gap: 42px;
flex-shrink: 0;
`
const Frame01 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
`
const Frame02 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
`
const Text01 = styled.div`
color: #FFF;
text-align: center;
leading-trim: both;
text-edge: cap;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
font-family: Philosopher;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 36px; /* 120% */
`
const Text02 = styled.div`
color: #9FF;
leading-trim: both;
text-edge: cap;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
font-family: "Helvetica Neue";
font-size: 44px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 1.76px;
`
const Text03 = styled.div`
color: #FFF;
leading-trim: both;
text-edge: cap;
font-family: "Helvetica Neue";
font-size: 24px;
font-style: italic;
font-weight: 400;
line-height: 36px; /* 150% */
`
const Frame03 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 1200px;
height: 531.658px;
flex-shrink: 0;
`
const Img01 = styled.div`
display: flex;
width: 203.614px;
height: 352.553px;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: lightgray -98.091px -56.114px / 199.513% 131.833% no-repeat;
`
const Img02 = styled.div`
display: flex;
width: 274.313px;
height: 472.27px;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
`
const Img03 = styled.div`
display: flex;
width: 377.062px;
height: 531.596px;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
`
const Img04 = styled.div`
display: flex;
width: 272.427px;
height: 471.328px;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
`
const Img05 = styled.div`
display: flex;
width: 202.671px;
height: 351.61px;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
`
const Frame02A: React.FC = () => {
    return (
        <Container>
            <Frame01>
                <Frame02>
                    <Text01>CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ</Text01>
                    <Text02>PHUTHOTOURIST</Text02>
                </Frame02>
                <Text03>Ngày thành lập 01/01/2019</Text03>
            </Frame01>
            <Frame03>
                <Img01><img src="/img/image 1.png" alt="" /></Img01>
                <Img02><img src="/img/image 2.png" alt="" /></Img02>
                <Img03><img src="/img/image 3.png" alt="" /></Img03>
                <Img04><img src="/img/image 4.png" alt="" /></Img04>
                <Img05><img src="/img/image 5.png" alt="" /></Img05>
            </Frame03>
        </Container>
    )
}

export default Frame02A;