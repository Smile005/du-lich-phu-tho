import React from 'react';
import { Form, Input, Radio, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const { TextArea } = Input;

const Container = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
  color: #1890ff;
  margin-bottom: 20px;
`;

const ApplicationForm: React.FC = () => {
  return (
    <Container>
      <Title>Ứng tuyển Online</Title>
      <Form layout="vertical">
        <Space direction="horizontal" size="large">
          <Form.Item label="Họ tên" name="name" style={{ flex: 1 }}>
            <Input defaultValue="Nguyễn Văn A" />
          </Form.Item>
          <Form.Item label="Giới tính" name="gender">
            <Radio.Group defaultValue="male">
              <Radio value="male">Nam</Radio>
              <Radio value="female">Nữ</Radio>
            </Radio.Group>
          </Form.Item>
        </Space>
        <Space direction="horizontal" size="large">
          <Form.Item label="Năm sinh" name="dob" style={{ flex: 1 }}>
            <Input defaultValue="12-12-2000" />
          </Form.Item>
          <Form.Item label="Nơi sinh" name="pob">
            <Input defaultValue="Phường 6, Quận Tân Bình, TP HCM" />
          </Form.Item>
        </Space>
        <Form.Item label="Nơi ở hiện nay" name="address">
          <Input defaultValue="123 Âu Cơ, Phường 9, Tân Bình, TP HCM" />
        </Form.Item>
        <Form.Item label="Điện thoại" name="phone">
          <Input addonBefore="+84" defaultValue="0123456789" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input defaultValue="nguyenvana@gmail.com" />
        </Form.Item>
        <Form.Item label="Facebook cá nhân" name="facebook">
          <Input defaultValue="facebook.com.vn" />
        </Form.Item>
        <Form.Item label="Trình độ" name="education">
          <Input defaultValue="Đại học" />
        </Form.Item>
        <Form.Item label="Bạn có sẵn sàng đi công tác dài ngày" name="willingTravel">
          <Radio.Group defaultValue="yes">
            <Radio value="yes">Có</Radio>
            <Radio value="partTime">Tùy thời điểm</Radio>
            <Radio value="no">Không</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Nơi đã từng làm việc trước đây" name="previousWork">
          <Input defaultValue="Những nơi đã từng làm việc trước đây" />
        </Form.Item>
        <Form.Item label="Kinh nghiệm bản thân" name="experience">
          <TextArea rows={4} defaultValue="Kinh nghiệm bản thân" />
        </Form.Item>
        <Form.Item label="Đính kèm CV" name="cv">
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Form.Item>
        <Form.Item label="Bạn có sẵn sàng làm thêm giờ" name="overtime">
          <Radio.Group defaultValue="yes">
            <Radio value="yes">Có</Radio>
            <Radio value="partTime">Tùy thời điểm</Radio>
            <Radio value="no">Không</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Gửi ngay
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default ApplicationForm;
