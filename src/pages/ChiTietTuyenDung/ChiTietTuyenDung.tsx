import React from 'react';
import styled from 'styled-components';
import VideoComponent from '../../components/VideoComponent';
import ChiTietTDComp01 from '../../components/ChiTietTDComp01';
import ChiTietTDComp02 from '../../components/ChiTietTDComp02';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store'; 
import { useParams } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1920px;
  height: 4141px;
  background: #FFF;
`;

const ChiTietTuyenDung: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = useSelector((state: RootState) => state.tuyendung.data);

  const recruitmentDetail = data.find(item => item.id === id);

  if (!recruitmentDetail) {
    return <div>Không tìm thấy thông tin tuyển dụng!</div>;
  }

  return (
    <Container>
      <VideoComponent />
      <div>
        <ChiTietTDComp01 details={recruitmentDetail} />
        {/* <ChiTietTDComp02 MoTa={recruitmentDetail.MoTaCongViec} /> */}
        <div>{recruitmentDetail.TinhTrang}</div>
      </div>
    </Container>
  );
};

export default ChiTietTuyenDung;
