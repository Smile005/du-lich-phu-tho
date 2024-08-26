import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../assets/icons/DamSem.svg'
import { tuyendung } from '../type/tuyendung';

const Container = styled.div`
display: inline-flex;
align-items: center;
gap: 24px;
`
const CustomLogo = styled.div`
width: 100px;
height: 100px;
fill: #9FD18B;
stroke-width: 3.361px;
stroke: var(--white, ##006C3A);
filter: drop-shadow(1.681px 1.681px 12.605px rgba(0, 0, 0, 0.15));
`
const MainFrame = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
`
const Text01 = styled.div`
color: var(--blue-primary-600, #003F7D);
leading-trim: both;
text-edge: cap;
font-family: Roboto;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 80px; /* 222.222% */
`
const Text02 = styled.div`
color: var(--blue-primary-400, #3376B8);
leading-trim: both;
text-edge: cap;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const Frame01 = styled.div`
display: flex;
align-items: flex-start;
gap: 24px;
`
const Frame02 = styled.div`
display: flex;
width: 160px;
border: double;
height: 21px;
gap: 4px;
`
const Frame03 = styled.div`
display: flex;
align-items: flex-start;
width: 150px;
height: 21px;
gap: 4px;
`
const Text03 = styled.div`
color: var(--gray-gray-500, #666);
/* Roboto/18px: Medium */
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 600;
background:red;
line-height: normal;
width: 130px;
height: 21px;
`
const Text04 = styled.div`
color: var(--gray-gray-500, #666);
/* Roboto/18px: Medium */
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const ChiTietTDComp02: React.FC<tuyendung> = (props) => {
    return (
        <Container>
            <CustomLogo>
                <Icon />
            </CustomLogo>
            {/* <MainFrame>
                <Text01>{props.MoTa.ViTri}</Text01>
                <Text02>{props.MoTa.ChucVu}</Text02>
                <Frame01>
                    <Frame02>
                        <div style={{ width: "24px", height: "24px", backgroundColor: 'blue'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.7183 8.19024C20.5352 3.2322 15.9944 1 12.0056 1H11.9944C8.01689 1 3.46477 3.22146 2.28167 8.17951C0.963353 13.7171 4.52393 18.4068 7.74647 21.358C8.88869 22.411 10.416 22.9998 12.0056 23C13.538 23 15.0704 22.4527 16.2535 21.358C19.4761 18.4068 23.0366 13.7278 21.7183 8.19024ZM12.0056 13.5668C11.5395 13.5668 11.078 13.4794 10.6474 13.3095C10.2168 13.1396 9.82548 12.8906 9.4959 12.5767C9.16631 12.2628 8.90487 11.8901 8.7265 11.48C8.54813 11.0699 8.45633 10.6303 8.45633 10.1863C8.45633 9.74241 8.54813 9.30282 8.7265 8.89269C8.90487 8.48255 9.16631 8.10988 9.4959 7.79598C9.82548 7.48207 10.2168 7.23306 10.6474 7.06318C11.078 6.89329 11.5395 6.80585 12.0056 6.80585C12.947 6.80585 13.8497 7.16201 14.5154 7.79598C15.181 8.42994 15.5549 9.28978 15.5549 10.1863C15.5549 11.0829 15.181 11.9427 14.5154 12.5767C13.8497 13.2107 12.947 13.5668 12.0056 13.5668Z" fill="#A3A3A3" />
                            </svg>
                            <Text03>{props.MoTa.NoiLamViec}</Text03>
                        </div>
                    </Frame02>
                    <Frame03>
                        <div style={{ width: "24px", height: "24px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.35 15.57C16.2999 15.6552 16.2334 15.7296 16.1544 15.7889C16.0753 15.8482 15.9852 15.8912 15.8894 15.9154C15.7935 15.9396 15.6939 15.9445 15.5961 15.9299C15.4984 15.9152 15.4045 15.8812 15.32 15.83L12.22 13.98C11.45 13.52 10.88 12.51 10.88 11.62V7.52C10.88 7.11 11.22 6.77 11.63 6.77C12.04 6.77 12.38 7.11 12.38 7.52V11.62C12.38 11.98 12.68 12.51 12.99 12.69L16.09 14.54C16.45 14.75 16.57 15.21 16.35 15.57Z" fill="#A3A3A3" />
                            </svg>
                            <Text04>{props.MoTa.NgayDang}</Text04>
                        </div>
                    </Frame03>
                </Frame01>
            </MainFrame> */}
        </Container>
    );
};

export default ChiTietTDComp02;