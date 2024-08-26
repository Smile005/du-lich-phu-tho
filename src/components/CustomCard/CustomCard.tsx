import React from 'react';
import { Card, Tag } from 'antd';
import { Link } from 'react-router-dom';
import './CustomCard.css'; // Đảm bảo tạo file CSS riêng để định dạng
import { News } from '../../type/news';
import styled from 'styled-components';

const { Meta } = Card;
const StyledCard = styled(Card)`
  display: flex;
  width: 265px;
  height: 292px;
  padding-bottom: 10px;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
`;

interface CustomCardProps {
  data: News;
}

const CustomCard: React.FC<CustomCardProps> = ({ data }) => {
  return (
    // <Link to={`/chitietbaiviet/${data.id}`} style={{ textDecoration: 'none' }}>
      <StyledCard
        hoverable
        className="custom-card"
        cover={<img alt={data.title} src={data.image || '/img/img (1).png'} />}
      >
        <Meta title={data.author || "Admin"} className="custom-meta" />
        <div className="custom-content">
          <p className="custom-title">{data.title}</p>
          <div className="custom-tags">
            {data.tags?.map((tag, index) => (
              <Tag key={index} style={{ color: tag === "Sự kiện" ? 'red' : undefined }}>
                {tag}
              </Tag>
            ))}
          </div>
          <div className="custom-footer">
            <span className="custom-views">{data.views || "0 lượt xem"}</span>
            <span className="custom-date">{data.date || "N/A"}</span>
          </div>
        </div>
      </StyledCard>
    // </Link>
  );
};

export default CustomCard;
