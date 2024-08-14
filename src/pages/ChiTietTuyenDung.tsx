import React from 'react';
import styled from 'styled-components';
import VideoComponent from '../components/VideoComponent';
import ChiTietTDComp01 from '../components/ChiTietTDComp01';


const Container = styled.div`
position: relative;
width: 1920px;
height: 2289px;
background: #FFF;
`
const Background = styled.div`
position: absolute;
display: inline-flex;
padding-top: 168px;
justify-content: center;
align-items: center;
`
const Frame01 = styled.div`
width: 1520px;
height: 3617px;
border-radius: 20px;
background: rgba(255, 255, 255, 0.80);
box-shadow: 0px 2px 32px 0px rgba(0, 0, 0, 0.20);
backdrop-filter: blur(7.5px);
`
const Frame02 = styled.div`
display: inline-flex;
flex-direction: column;
align-items: flex-start;
gap: 32px;
`
const Frame04 = styled.div`
display: inline-flex;
padding: 16px 24px;
justify-content: center;
align-items: center;
border-radius: 88.611px;
background: var(--green-green-50, #E6F7E6);
`
const Text04 = styled.div`
color: var(--green-green-500, #03A600);
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
const Frame03 = styled.div`

`

type ChiTietProps = {
    ViTri: string,
    SoLuong: string,
    NoiLamViec: string,
    DiaChiLamViec: string,
    MoTaCongViec: string,
    NgayLamViec: string,
    GioLamViec: string,
    QuyenLoi: string,
    YeuCau: string,
    DoTuoi: string,
    TrinhDo: string,
    HoSoGom: {
        ThongTin: string[],
        LienLac: string
    }
}
type MoTaProps = {
    ViTri: string,
    ChucVu: string,
    NoiLamViec: string,
    NgayDang: string,
    TinhTrang: string,
}
type TuyenDungProps = {
    MoTa: MoTaProps,
    ChiTiet?: ChiTietProps
}

const ChiTietTuyenDung: React.FC<TuyenDungProps> = (props) => {
    return (
        <Container>
            <Background>
                <VideoComponent />
                <Frame01>
                    <Frame02>


                    </Frame02>

                    <ChiTietTDComp01 MoTa={props.MoTa} />
                    <Frame04>
                        <Text04>{props.MoTa.TinhTrang}</Text04>
                    </Frame04>
                </Frame01>
            </Background>
        </Container >
    )
}

export default ChiTietTuyenDung;