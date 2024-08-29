import React from 'react';
import { Card, Tag } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { News } from '../../type/news';

const { Meta } = Card;

const StyledCard = styled(Card)`
  border-radius: 10px;
  overflow: hidden;
  width: 301px;
  height: 292px;
  flex-shrink: 0;

  img {
    border-radius: 10px 10px 0 0;
  }
`;

const StyledTag = styled(Tag)`
   margin-bottom: 8px;
  transition: color 0.3s, background-color 0.3s; // Smooth transition

  &:hover {
    color: red; // Text color on hover
    background-color: transparent; // Background color on hover (optional)
  }
`;

interface CustomCardProps {
  data: News;
}

const CustomCard: React.FC<CustomCardProps> = ({ data }) => {
  return (
    <Link to={`/chitietbaiviet/${data.id}`} style={{ textDecoration: 'none' }}>
      <StyledCard
        hoverable
        cover={<img alt={data.title} src={data.image || '/img/img (1).png'} />}
      >
        <Meta title={data.author || "Admin"} />
        <div>
          <p>{data.title}</p>
          <div>
            {data.tags?.map((tag, index) => (
              <StyledTag key={index} >
                {tag}
              </StyledTag>
            ))}
          </div>
          <div>{data.date}</div>
        </div>
      </StyledCard>
    </Link>
  );
};

export default CustomCard;
