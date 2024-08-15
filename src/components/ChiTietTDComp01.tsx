import React from "react";
import styled from "styled-components";
import { Image } from "antd";

const Container = styled.div`
display: inline-flex;
flex-direction: column;
align-items: flex-start;
gap: 32px;
`
const Frame01 = styled.div`
display: flex;
height: 687px;
align-items: center;
`
const StyledImage = styled(Image)`
width: 1220px;
height: 687px;
border-radius: 4px;
`
const Frame02 = styled.div`

`
const Frame03 = styled.div`

`
type ChiTietProps = {
    MoTaSoLuoc?: string,
    TinhTrang?: string,
    Img?: string;
    ViTri?: string,
    SoLuong?: string,
    NoiLamViec?: string,
    DiaChiLamViec?: string,
    MoTaCongViec?: string[],
    NgayLamViec?: string,
    GioLamViec?: string,
    QuyenLoi?: string[],
    YeuCau?: string[],
    DoTuoi?: string,
    TrinhDo?: string,
    HoSoGom?: string[],
    LienLac?: string
}
type TuyenDungProps = {
    ChiTiet: ChiTietProps,
}
const ChiTietTDComp01: React.FC<TuyenDungProps> = (props) => {
    return (
        <Container>
            <Frame01>
                <StyledImage src="https://example.com/your-image.jpg" alt="" />
            </Frame01>
            <Frame02></Frame02>
            <Frame03></Frame03>
        </Container>
    )
}

export default ChiTietTDComp01;