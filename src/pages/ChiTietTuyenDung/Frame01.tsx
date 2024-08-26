import React from 'react';
import styled from 'styled-components';
import { Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled(Title)`
  font-size: 16px !important;
  color: #036fca;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

type ChiTietProps = {
  MoTaSoLuoc?: string;
  TinhTrang?: string;
  Img?: string;
  ViTri?: string;
  SoLuong?: string;
  NoiLamViec?: string;
  DiaChiLamViec?: string;
  MoTaCongViec?: string[];
  NgayLamViec?: string;
  GioLamViec?: string;
  QuyenLoi?: string[];
  YeuCau?: string[];
  DoTuoi?: string;
  TrinhDo?: string;
  HoSoGom?: string[];
  LienLac?: string;
};

type TuyenDungProps = {
  ChiTiet: ChiTietProps;
};

const TuyenDung: React.FC<TuyenDungProps> = ({ ChiTiet }) => {
  return (
    <Container>
      <Title level={3} style={{ color: '#036fca' }}>
        Chi tiết tin tuyển dụng
      </Title>

      <Section>
        <SectionTitle level={4}>Vị trí</SectionTitle>
        <Text>{ChiTiet.ViTri}</Text>
      </Section>

      <Section>
        <SectionTitle level={4}>Số lượng</SectionTitle>
        <Text>{ChiTiet.SoLuong}</Text>
      </Section>

      <Section>
        <SectionTitle level={4}>Nơi làm việc</SectionTitle>
        <Text>{ChiTiet.NoiLamViec}</Text>
      </Section>

      <Section>
        <SectionTitle level={4}>Địa chỉ làm việc</SectionTitle>
        <Text>{ChiTiet.DiaChiLamViec}</Text>
      </Section>

      <Section>
        <SectionTitle level={4}>Mô tả công việc</SectionTitle>
        <ul>
          {ChiTiet.MoTaCongViec?.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionTitle level={4}>Ngày làm việc</SectionTitle>
        <Text>{ChiTiet.NgayLamViec}</Text>
      </Section>

      <Section>
        <SectionTitle level={4}>Giờ làm việc</SectionTitle>
        <Text>{ChiTiet.GioLamViec}</Text>
      </Section>

      <Section>
        <SectionTitle level={4}>Quyền lợi</SectionTitle>
        <ul>
          {ChiTiet.QuyenLoi?.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionTitle level={4}>Yêu cầu</SectionTitle>
        <ul>
          {ChiTiet.YeuCau?.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionTitle level={4}>Độ tuổi</SectionTitle>
        <Text>{ChiTiet.DoTuoi}</Text>
      </Section>

      <Section>
        <SectionTitle level={4}>Trình độ</SectionTitle>
        <Text>{ChiTiet.TrinhDo}</Text>
      </Section>

      <Section>
        <SectionTitle level={4}>Hồ sơ gồm</SectionTitle>
        <ul>
          {ChiTiet.HoSoGom?.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionTitle level={4}>Liên hệ</SectionTitle>
        <Text>{ChiTiet.LienLac}</Text>
      </Section>
    </Container>
  );
};

export default TuyenDung;
