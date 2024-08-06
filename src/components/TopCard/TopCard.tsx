import React from 'react';
import { Typography } from 'antd';
import './TopCard.css'; // Đảm bảo tạo file CSS riêng để định dạng

const { Text } = Typography;

const TopCard: React.FC = () => {
  return (
    <div className="custom-card">
      <img src="/img/img.png" alt="Thông báo đấu giá giữ xe tại CVHH Đầm Sen" className="custom-card-image" />
      <div className="custom-card-content">
        <Text className="custom-card-title">Thông báo đấu giá giữ xe tại CVHH Đầm Sen</Text>
        <div className="custom-card-footer">
          <Text type="secondary">10k views</Text>
          <Text type="secondary">•</Text>
          <Text type="secondary">20/02/2022</Text>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
