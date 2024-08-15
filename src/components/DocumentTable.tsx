import React from 'react';
import { Table, Input, DatePicker, Pagination, Space } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { RangePicker } = DatePicker;

const Container = styled.div`
width: 1234px;
height: 807px;
flex-shrink: 0;
border-radius: 20px;
background: rgba(255, 255, 255, 0.70);
box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.20);
backdrop-filter: blur(7.5px);
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


const NgayTao = styled.div`
display: flex;
align-items: flex-start;

color: var(--blue-primary-500, #0054A6);
/* Roboto/18px: Medium */
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Paging = styled.div`
display: inline-flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
gap: 8px;
`
const HienThi = styled.div`
display: flex;
align-items: center;
gap: 8px;
`
const Paging01 = styled.div`
display: flex;
flex-direction: row;
width: 275px;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
`
const PagingText = styled.div`
color: var(--gray-gray-600, #4D4D4D);
text-align: center;

/* Roboto/16px: Regular */
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 21px; /* 131.25% */
`
const Paging01a = styled.div`
display: flex;
width: 36px;
height: 32px;
padding: 3px 13px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 4px;
border: 1px solid var(--blue-primary-500, #0054A6);

color: var(--blue-primary-500, #0054A6);
text-align: center;
/* Open Sans/16px/16px: Bold */
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`





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


        <Paging>
          <HienThi>
            <PagingText>Hiển thị </PagingText>
            <Paging01a>10</Paging01a>
            <PagingText>câu trả lời trong mỗi trang</PagingText>
          </HienThi>
          <Pagination defaultCurrent={1} total={50} pageSize={10} style={{ marginTop: '20px', textAlign: 'left' }} />
        </Paging>
        
      </TableContainer>
    </Container>
  );
};

export default DocumentTable;
