import React from "react";
import styled from "styled-components";
import { Image } from "antd";
import { tuyendung } from "../type/tuyendung";

const Container = styled.div`
display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 32px;
`
const Frame01 = styled.div`
display: flex;
height: 687px;
flex-direction: column;
justify-content: center;
align-items: center;
`
const StyledImage = styled(Image)`
display: flex;
height: 687px;
flex-direction: column;
justify-content: center;
align-items: center;
width: 1220px;
border-radius: 4px;
`
const Frame02 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 32px;
`
const StyledText02a = styled.div`
color: var(--blue-primary-500, #0054A6);

/* Roboto/24px: Medium */
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
const Frame03 = styled.div`
display: flex;
width: 1166px;
justify-content: center;
align-items: center;
`
const Frame04 = styled.div`
display: flex;
width: 218px;
flex-direction: column;
align-items: flex-start;
flex-shrink: 0;
border-right: 1px solid var(--gray-gray-200, #C2C2C2);
`
const Frame04a = styled.div`
display: flex;
padding: 16px 36px;
align-items: center;
gap: 10px;
align-self: stretch;
border-bottom: 1px solid var(--gray-gray-200, #C2C2C2);
`
const Frame04b = styled.div`
display: flex;
height: 212px;
padding: 16px 36px;
align-items: center;
gap: 10px;
align-self: stretch;
border-bottom: 1px solid var(--gray-gray-200, #C2C2C2);
`
const Frame04c = styled.div`
display: flex;
height: 218px;
padding: 16px 36px;
align-items: center;
gap: 10px;
align-self: stretch;
border-bottom: 1px solid var(--gray-gray-200, #C2C2C2);
`
const Frame04d = styled.div`
display: flex;
height: 248px;
padding: 16px 36px;
align-items: center;
gap: 10px;
align-self: stretch;
border-bottom: 1px solid var(--gray-gray-200, #C2C2C2);
`
const StyledText04 = styled.div`
color: var(--gray-gray-700, #333);
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 36px; /* 200% */
`
const Frame05 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
flex: 1 0 0;
`
const Frame05b = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 212px;
padding: 16px 36px;
gap: 10px;
align-self: stretch;
border-bottom: 1px solid var(--gray-gray-200, #C2C2C2);
`
const StyledText05 = styled.div`
color: var(--gray-gray-700, #333);
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 36px; /* 225% */
`
type TuyenDungProps = {
    details: tuyendung,
}
const ChiTietTDComp01: React.FC<TuyenDungProps> = ({ details }) => {
    return (
        <Container>
            <Frame01>
                <StyledImage src={details.Img} alt="" />
            </Frame01>
            <Frame02>
                <StyledText02a>Chi tiết tin tuyển dụng</StyledText02a>
                <Frame03>
                    <Frame04>
                        <Frame04a><StyledText04>Vị trí</StyledText04></Frame04a>
                        <Frame04a><StyledText04>Số lượng</StyledText04></Frame04a>
                        <Frame04a><StyledText04>Nơi làm việc</StyledText04></Frame04a>
                        <Frame04a><StyledText04>Địa chỉ làm việc</StyledText04></Frame04a>
                        <Frame04b><StyledText04>Mô tả công việc</StyledText04></Frame04b>
                        <Frame04a><StyledText04>Ngày làm việc</StyledText04></Frame04a>
                        <Frame04a><StyledText04>Giờ làm việc</StyledText04></Frame04a>
                        <Frame04c><StyledText04>Quyền lợi</StyledText04></Frame04c>
                        <Frame04d><StyledText04>Yêu cầu</StyledText04></Frame04d>
                        <Frame04a><StyledText04>Độ tuổi</StyledText04></Frame04a>
                        <Frame04a><StyledText04>Trình độ</StyledText04></Frame04a>
                        <Frame04b><StyledText04>Hồ sơ gồm</StyledText04></Frame04b>
                    </Frame04>
                    <Frame05>
                        <Frame04a><StyledText05>{details.ViTriTuyenDung || "Lỗi"}</StyledText05></Frame04a>
                        <Frame04a><StyledText05>{details.SoLuong}</StyledText05></Frame04a>
                        <Frame04a><StyledText05>{details.NoiLamViec}</StyledText05></Frame04a>
                        <Frame04a><StyledText05>{details.DiaChiLamViec}</StyledText05></Frame04a>
                        <Frame04b><StyledText05>{details.MoTaCongViec}</StyledText05></Frame04b>
                        <Frame04a><StyledText05>{details.NgayLamViec}</StyledText05></Frame04a>
                        <Frame04a><StyledText05>{details.GioLamViec}</StyledText05></Frame04a>
                        <Frame04c><StyledText05>{details.QuyenLoi}</StyledText05></Frame04c>
                        <Frame04d><StyledText05>{details.YeuCau}</StyledText05></Frame04d>
                        <Frame04a><StyledText05>{details.DoTuoi}</StyledText05></Frame04a>
                        <Frame04a><StyledText05>{details.TrinhDo}</StyledText05></Frame04a>
                        <Frame05b>
                            <StyledText05>{details.HoSoGom}</StyledText05>
                            <StyledText05>{details.LienLac}</StyledText05>
                        </Frame05b>
                    </Frame05>
                </Frame03>
            </Frame02>

        </Container>
    )
}

export default ChiTietTDComp01;