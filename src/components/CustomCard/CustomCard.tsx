import React from 'react';
import { Card, Tag } from 'antd';
import './CustomCard.css'; // Đảm bảo tạo file CSS riêng để định dạng

const { Meta } = Card;

const CustomCard: React.FC = () => {
  return (
    <Card
      hoverable
      className="custom-card"
      cover={<img alt="example" src="/img/img (1).png" />}
    >
      <Meta title="Admin" className="custom-meta" />
      <div className="custom-content">
        <h3 className="custom-title">Gazillion Bubble Show của Fan Yang tại Đầm Sen</h3>
        <div className="custom-tags">
          <Tag style={{color:'red'}}>Sự kiện</Tag>
          <Tag>Thông báo</Tag>
          <Tag>Tin tức</Tag>
        </div>
        <div className="custom-footer">
          <span className="custom-views">10N lượt xem</span>
          <span className="custom-date">20/02/2022</span>
        </div>
      </div>
    </Card>
  );
};

export default CustomCard;
