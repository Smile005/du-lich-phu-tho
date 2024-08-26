import React from 'react';
import { Input, DatePicker, Select, Space } from 'antd';
import { SearchOutlined, CalendarOutlined, SortAscendingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { RangePicker } = DatePicker;
const { Option } = Select;

const Container = styled.div`
right: 0px;
display: flex;
justify-content: center;
width: 1134px;
height: 80px;
flex-shrink: 0;
border-radius: 12px;
background: rgba(255, 255, 255, 0.70);
box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.10);
backdrop-filter: blur(7.5px);
`

const SearchComponent: React.FC = () => {
  return (
    <Container>
      <Space size="middle">
        <Input
          placeholder="Tìm kiếm"
          prefix={<SearchOutlined />}
          style={styles.input}
        />
        <RangePicker
        //   defaultValue={[moment('2021-10-10', 'YYYY-MM-DD'), moment('2021-10-10', 'YYYY-MM-DD')]}
          format="DD/MM/YYYY"
          suffixIcon={<CalendarOutlined />}
          style={styles.datePicker}
        />
        <Select defaultValue="A đến Z" style={styles.select}>
          <Option value="ascend">
            <SortAscendingOutlined /> A đến Z
          </Option>
          <Option value="descend">
            <SortAscendingOutlined rotate={180} /> Z đến A
          </Option>
        </Select>
      </Space>
    </Container>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '80%',
    margin: '0 auto',
    marginTop: '20px',
  } as React.CSSProperties,
  input: {
    width: '200px',
  },
  datePicker: {
    width: '300px',
  },
  select: {
    width: '150px',
  },
};

export default SearchComponent;
