import React from 'react';
import styled from 'styled-components';
import VideoComponent from '../components/VideoComponent';
import ChiTietTDComp01 from '../components/ChiTietTDComp01';
import ChiTietTDComp02 from '../components/ChiTietTDComp02';

const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
width: 1920px;
height: 4141px;
background: #FFF;
`
const Frame01 = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 48px;

`
const Frame02 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 80px;
`
const Frame03 = styled.div`
width: 1520px;
height: 3617px;
border-radius: 20px;
background: rgba(255, 255, 255, 0.80);
box-shadow: 0px 2px 32px 0px rgba(0, 0, 0, 0.20);
backdrop-filter: blur(7.5px);
`
const Frame04 = styled.div`
display: inline-flex;
flex-direction: column;
align-items: flex-start;
gap: 32px;
`
const Frame05 = styled.div`
display: inline-flex;
padding: 16px 24px;
justify-content: center;
align-items: center;
border-radius: 88.611px;
background: var(--green-green-50, #E6F7E6);

color: var(--green-green-500, #03A600);
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
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
const TuyenDung = {
    MoTaSoLuoc: "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...",
    TinhTrang: "Đang Tuyển",
    Img: "",
    ViTri: "Nhân viên thiết kế đồ họa",
    ChucVu: "Nhân viên chính thức",
    SoLuong: "02 người",
    NoiLamViec: "Công viên văn hóa Đầm Sen",
    DiaChiLamViec: "3 Hòa Bình, Phường 3, Quận 11, TP.HCM",
    MoTaCongViec: [
        "Thiết kế hình ảnh, brochure, banner, poster, pano, backdrop sân khấu, các loại vé mời … và các ấn phẩm phục vụ sự kiện, truyền thông của công viên.",
        "Chụp hình, quay phim, dựng video đơn giản.",
        "Lên phác thảo, trao đổi ý tưởng với quản lý và hoàn thiện thiết kế.",
        "Các chi tiết về công việc được trao đổi tại buổi phỏng vấn."
    ],
    NgayLamViec: "...",
    GioLamViec: "Giờ hành chính",
    QuyenLoi: [
        "Được ký hợp đồng lao động, tham gia đầy đủ chế độ BHXH.",
        "Thưởng tháng 13, 14, các ngày lễ, tết trong năm.",
        "Được phục vụ bữa ăn trưa tại nơi làm việc.",
        "Được trang bị đồng phục, khám sức khỏe định kỳ hàng năm.",
        "Được tham gia Bảo hiểm tai nạn 24/24.",
        "Nghỉ phép: 12 ngày phép / năm, công tác 5 năm thêm 1 ngày.",
        "Được tham gia miễn phí các khóa đào tạo nâng cao nghiệp vụ.",
        "Môi trường làm việc thân thiện, nhiều cơ hội học hỏi từ đội ngũ quản lý, nhân sự giàu kinh nghiệm, nhiệt huyết.",
        "Các chế độ khác: Quà sinh nhật, cưới hỏi, lì xì tết. Quà trung thu, quà Tết, quà thiếu nhi 1/6.",
        "Hỗ trợ ốm đau, ma chay, sinh con. Tham gia Ngày hội Gia đình, Ngày hội Tuổi thơ, hoạt động văn thể mỹ hàng năm."
    ],
    YeuCau: [
        "Tốt nghiệp từ Cao đẳng chuyên ngành Mỹ thuật, Đồ họa....",
        "Sử dụng thành thạo các phần mềm thiết kế (Photoshop, Corel, Illustrator…).",
        "Có khả năng quay và dựng video hấp dẫn người xem.",
        "Sử dụng thành thạo máy ảnh, máy quay, flycam...",
        "Có khiếu thẩm mỹ, sáng tạo, chủ động trong công việc.",
        "Có thể làm việc cuối tuần, lễ tết theo đặc thù kinh doanh Công viên Giải trí."
    ],
    DoTuoi: "22 - 27 tuổi",
    TrinhDo: "Cao đẳng",
    HoSoGom: [
        "Ứng viên vui lòng gửi CV đến email: tuyendung@damsenpark.vn.",
        "Hoặc nộp hồ sơ trực tiếp tại Trụ sở Văn phòng Công ty: 15 đường số 2, cư xá Lữ Gia, P. 15, Quận 11."
    ],
    LienLac: "(ĐT: 028 38 650 921  - Phòng Nhân sự)."
}

const ChiTietTuyenDung: React.FC<TuyenDungProps> = (props) => {
    return (
        <Container>
            <VideoComponent />
            <Frame01>
                <Frame02>
                    <Frame03>
                        {/* <ChiTietTDComp01 ChiTiet={props.ChiTiet} />
                        <ChiTietTDComp02 MoTa={props.ChiTiet} /> */}
                        <Frame05>{props.ChiTiet.TinhTrang}</Frame05>
                    </Frame03>
                </Frame02>
            </Frame01>
        </Container >
    )
}

export default ChiTietTuyenDung;