import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Tag } from 'antd';
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';

const StyledTag = styled(Tag) <{ selected: boolean }>`
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#0366d6' : '#fff')} !important;
  color: ${({ selected }) => (selected ? '#fff' : 'inherit')} !important;
  border-color: ${({ selected }) => (selected ? '#0366d6' : 'unset')} !important;

display: flex;
height: 40px;
justify-content: center;
align-items: center;
gap: 8px;

  border-radius: 999px; /* Bo góc */
  padding: 0px 12px; /* Tùy chỉnh padding để thẻ trông cân đối hơn */


/* Roboto/14px: Medium */
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

const Container = styled.div`
width: 362px;
height: 936px;
border-radius: 12px;
background: rgba(255, 255, 255, 0.70);
box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.10);
backdrop-filter: blur(7.5px);
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  color: #036fca;
  margin-bottom: 10px;
  font-size: 16px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 20px;
  .ant-input {
    border-radius: 20px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const FilterMenu: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prevSelectedTags =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter(t => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  return (
    <Container>
      <StyledInput
        placeholder="Tìm kiếm"
        prefix={<SearchOutlined />}
      />

      <Section>
        <SectionTitle>
          Lĩnh vực
        </SectionTitle>
        <TagContainer>
          {CongViecTags.map(tag => (
            <StyledTag
              key={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </StyledTag>
          ))}
        </TagContainer>
      </Section>

      <Section>
        <SectionTitle>
          Hình thức làm việc
        </SectionTitle>
        <TagContainer>
          {ThoiGianLamViecTags.map(tag => (
            <StyledTag
              key={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </StyledTag>
          ))}
        </TagContainer>
      </Section>

      <Section>
        <SectionTitle>
          <EnvironmentOutlined /> Nơi làm việc
        </SectionTitle>
        <TagContainer>
          {ViTriTags.map(tag => (
            <StyledTag
              key={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </StyledTag>
          ))}
        </TagContainer>
      </Section>
    </Container>
  );
};

export default FilterMenu;

const CongViecTags = [
  'Hướng dẫn viên', 'Kinh doanh', 'Kĩ sư xây dựng', 'Nhân viên kế toán', 'Nhân viên kĩ thuật', 'Nhân viên phục vụ'
];
const ThoiGianLamViecTags = [
  'Bán thời gian', 'Nhân viên chính thức', 'Theo ca', 'Thực tập'
];
const ViTriTags = [
  'Cà Phê Vườn Đá', 'NH Thủy Tạ Đầm Sen', 'CVVH Đầm Sen', 'Khách sạn Ngọc Lan',
  'Khách sạn Phú Thọ', 'KDL Sinh Thái Vàm Sát', 'Trung tâm DVDL Đầm Sen', 'VP Phuthotourist'
];