import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Avatar, Button, Tag } from 'antd';
import { EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { tuyendung } from '../type/tuyendung';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
// import 'antd/dist/antd.css'; // Đảm bảo bạn đã cài đặt Ant Design

const { Meta } = Card;

const JobCardContainer = styled(Card)`
  width: 361px;
  height: 296px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #FFF;
  .ant-card-meta-title {
    color: var(--blue-primary-600, #003F7D);
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  }
  .ant-card-meta-description {
    color: #666;
  }
  .ant-avatar {
    width: 36px;
    height: 36px;
    fill: #9FD18B;
    stroke-width: 4px;
    stroke: var(--white, #FFF);
    filter: drop-shadow(2px 2px 15px rgba(0, 0, 0, 0.15));
  }
  .job-status {
    margin-left: auto;
    color: #ff4d4f;
  }
  .job-details {
    color: #666;
  }
  .job-button {
    display: flex;
    width: 321px;
    height: 44px;
    padding: 0px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
`;
const CustomText = styled.p`
  color: #FFF;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

type DataProps = {
  details: tuyendung;
};

const JobCard: React.FC<DataProps> = ({ details }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/chitiettuyendung/${details.id}`); // Sửa đường dẫn để sử dụng details.id
  };

  return (
    <JobCardContainer>
      <Meta
        avatar={<Avatar><Logo /></Avatar>}
        title={details.ViTriTuyenDung}
        description={<Tag color="red">{details.ChucVu}</Tag>}
      />
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <EnvironmentOutlined style={{ marginRight: '8px' }} />
        <span>CVVH Đầm Sen</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
        <ClockCircleOutlined style={{ marginRight: '8px' }} />
        <span>2 tuần trước</span>
        <Tag className="job-status">{details.TinhTrang}</Tag>
      </div>
      <div className="job-details" style={{ marginTop: '10px' }}>
        {details.MoTaSoLuoc}
      </div>
      <Button className="job-button" type="primary" block style={{ marginTop: '10px' }} onClick={handleButtonClick}>
        <CustomText>Xem chi tiết</CustomText>
      </Button>
    </JobCardContainer>
  );
};

export default JobCard;
