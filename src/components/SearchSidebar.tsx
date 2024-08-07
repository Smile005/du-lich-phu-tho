import React from 'react';
import { Input, Tag, Typography } from 'antd';
import { SearchOutlined, UserOutlined, SolutionOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title } = Typography;

const SidebarContainer = styled.div`
  width: 362px;
  height: 936px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.70);
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(7.5px);
`;

const Section = styled.div`
  display: flex;
  width: 322px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Frame01 = styled.div`
  display: flex;
  padding-right: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`
const Frame02 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`

const CustomTag = styled(Tag)`
  margin: 5px 5px 0 0;
  border-radius: 15px;
  font-size: 14px;
`;

const Frame8 = styled.div

const SearchSidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Input
        prefix={<SearchOutlined />}
        placeholder="Tìm kiếm"
        style={{ borderRadius: '20px', marginBottom: '20px' }}
      />
      <Section>
        <Title level={4}><UserOutlined /> Lĩnh vực </Title>
        <Frame01>
          <Frame02>
            <CustomTag>Hướng dẫn viên</CustomTag>
            <CustomTag>Kinh doanh</CustomTag>
          </Frame02>
          <Frame02>
            <CustomTag>Kĩ sư xây dựng</CustomTag>
            <CustomTag>Nhân viên kế toán</CustomTag>
          </Frame02>
          <Frame02>
            <CustomTag>Nhân viên Kĩ thuật</CustomTag>
            <CustomTag>Nhân viên phục vụ</CustomTag>
          </Frame02>
        </Frame01>
      </Section>

      <Section>
        <Title level={4}><SolutionOutlined /> Hình thức làm việc </Title>
        <Frame01 >
          <Frame02>
            <CustomTag>Bán thời gian</CustomTag>
            <CustomTag>Nhân viên chính thức</CustomTag>
          </Frame02>
          <Frame02>
            <CustomTag>Theo ca</CustomTag>
            <CustomTag>Thực tập</CustomTag>
          </Frame02>
        </Frame01>
      </Section>

      <Section>
        <Title level={4}><EnvironmentOutlined /> Nơi làm việc </Title>
        <Frame01>
          <Frame02>
            <CustomTag>Cà Phê Vườn Đá</CustomTag>
            <CustomTag>NH Thủy Tạ Đầm Sen</CustomTag>
          </Frame02>
          <Frame02>
            <CustomTag>CVVH Đầm Sen</CustomTag>
            <CustomTag>Khách sạn Ngọc Lan</CustomTag>
          </Frame02>
          <Frame02>
            <CustomTag>Khách sạn Phú Thọ</CustomTag>
            <CustomTag>KDL Sinh Thái Vàm Sát</CustomTag>
          </Frame02>
          <Frame02>
            <CustomTag>Trung tâm DVDL Đầm Sen</CustomTag>
            <CustomTag>VP Phuthotourist</CustomTag>
          </Frame02>
        </Frame01>
      </Section>
    </SidebarContainer>
  );
};

export default SearchSidebar;
