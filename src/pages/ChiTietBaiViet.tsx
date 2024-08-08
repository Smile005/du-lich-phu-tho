import styled from 'styled-components';
import VideoComponent from '../components/VideoComponent';

const Container = styled.div`
    position: relative;
    width: 1920px;
    height: 3435px;
    background: #FFF;
`
const Frame01 = styled.div`
    position: absolute;
    display: flex;
    padding-top: 168px;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.70);
    box-shadow: 0px 2px 32px 0px rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(7.5px);
`
const Frame02 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
`
const Frame03 = styled.div`
    display: flex;
    padding: 48px;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
`
const Frame04 = styled.div`
    display: flex;
    padding-right: 38px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
`
const Frame05 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`
const Frame06 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;c
`
const StyledText01 = styled.p`
    color: var(--blue-primary-500, #0054A6);
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px; /* 166.667% */
`
const Frame07 = styled.div`
    display: flex;
    align-items: center;
    gap: 731px;
`
const StyledText02 = styled.p`
    color: var(--gray-gray-500, #666);
    /* Roboto/16px: Regular */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px; /* 131.25% */
`
const Frame08 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`
const StyledText03 = styled.p`
    align-self: stretch;
    color: var(--gray-gray-700, #333);
    /* Roboto/18px: Regular */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
`
const StyledImage = styled.image`
    width: 831px;
    height: 747px;
`
const StyledText04 = styled.p`
color: var(--blue-primary-500, #0054A6);
font-family: Roboto;
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 36px; /* 112.5% */
    
`
const Frame09 = styled.div`
display: flex;
width: 1252px;
height: 292px;
justify-content: space-between;
align-items: flex-start;
`
const ChiTietBaiViet: React.FC = () => {
    return (
        <Container>
            <VideoComponent />
            <Frame01>
                <Frame02>
                    <Frame03>
                        <Frame04>
                            <StyledText01>
                                Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022
                            </StyledText01>
                            <Frame07>
                                <StyledText02>
                                    by tuyendung in on Tháng Năm 21, 2020
                                </StyledText02>
                            </Frame07>
                        </Frame04>

                        <Frame05>
                        <Frame08>
                                <img src="/DuLichDamSen.png" alt="" />
                            </Frame08>
                            <StyledText03>
                                dfsfsdf
                             </StyledText03>
                            <img src="/image 35.png" alt="" style= {{width: '831px',height: '747px'}}/>
                        </Frame05>

                        <Frame06>
                                <StyledText04>Bài viết liên quan</StyledText04>
                                <Frame09>
                                    
                                </Frame09>
                        </Frame06>
                    </Frame03>
                </Frame02>
            </Frame01>
        </Container>
    )
}

export default ChiTietBaiViet;