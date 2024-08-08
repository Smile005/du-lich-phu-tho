import React from 'react';
import { Table, Input, DatePicker, Pagination, Space } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { RangePicker } = DatePicker;

const Container = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin-bottom: 0;
`;

const TableContainer = styled.div`
  margin-top: 20px;
`;

const columns = [
  {
    title: 'STT',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Tên tài liệu',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Tải tài liệu',
    dataIndex: 'download',
    key: 'download',
    render: () => <DownloadOutlined style={{ fontSize: '16px', color: '#1890ff' }} />,
  },
];

const data = [
  {
    key: '1',
    index: '1',
    name: 'Khám phá Hội An - Việt Nam',
    date: '03/03/21 22:43',
  },
  {
    key: '2',
    index: '2',
    name: 'Hải Phòng yêu cầu người dân không ra khỏi nhà sau 22h',
    date: '03/03/21 22:43',
  },
  {
    key: '3',
    index: '3',
    name: 'Chuẩn bị gì sau khi tiêm vắc xin Covid-19?',
    date: '03/03/21 22:43',
  },
  {
    key: '4',
    index: '4',
    name: 'SNOW CHANNEL 1',
    date: '03/03/21 22:43',
  },
  {
    key: '5',
    index: '5',
    name: 'Chuẩn bị gì sau khi tiêm vắc xin Covid-19?',
    date: '03/03/21 22:43',
  },
  {
    key: '6',
    index: '6',
    name: 'Hải Phòng yêu cầu người dân không ra khỏi nhà sau 22h',
    date: '03/03/21 22:43',
  },
  {
    key: '7',
    index: '7',
    name: 'Chuẩn bị gì sau khi tiêm vắc xin Covid-19?',
    date: '03/03/21 22:43',
  },
  {
    key: '8',
    index: '8',
    name: 'Du lịch từ TP.HCM đang như thế nào? 101',
    date: '03/03/21 22:43',
  },
  {
    key: '9',
    index: '9',
    name: 'SNOW CHANNEL 1',
    date: '03/03/21 22:43',
  },
  {
    key: '10',
    index: '10',
    name: 'Hải Phòng yêu cầu người dân không ra khỏi nhà sau 22h',
    date: '03/03/21 22:43',
  },
];

const DocumentTable: React.FC = () => {
  return (
    <Container>
      <Header>
        <Space direction="vertical">
          <Title>Ngày tạo</Title>
          <RangePicker />
        </Space>
        <Space direction="vertical">
          <Title>Từ khóa</Title>
          <Input placeholder="Tìm kiếm" prefix={<SearchOutlined />} />
        </Space>
      </Header>
      <TableContainer>
        <Table columns={columns} dataSource={data} pagination={false} />
        <Pagination defaultCurrent={1} total={50} pageSize={10} style={{ marginTop: '20px', textAlign: 'right' }} />
      </TableContainer>
    </Container>
  );
};

export default DocumentTable;
