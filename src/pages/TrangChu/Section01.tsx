import React from 'react';
import { Card, Button } from 'antd';
import './Section01.css';

const Section01: React.FC = () => {
  return (
    <div className="container">
      <Card bordered={false} className="custom-card">
        <div className="content">
          <div className="text-section">
            <h2>VỀ CHÚNG TÔI</h2>
            <h1>Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu cầu của bạn!</h1>
            <p>
              Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn vị thành viên của Saigontourist. Phuthotourist được biết đến với các sản phẩm du lịch nổi tiếng tại TP.HCM (Quận 11) như:
            </p>
            <ul>
              <li>Công viên Văn hóa Đầm Sen</li>
              <li>Khu du lịch sinh thái Vàm Sát</li>
              <li>Khách sạn Ngọc Lan</li>
              <li>Khách sạn Phú Thọ</li>
              <li>Trung tâm thông tin xúc tiến hỗ trợ Đầm Sen (Damsen Plaza)</li>
              <li>Nhà hàng Thủy Tạ Đầm Sen</li>
              <li>Cà phê Vườn Đá</li>
              <li>Trung tâm Dịch vụ Du lịch Đầm Sen (Damsen Travel)</li>
              <li>Liên kết với Công viên nước Đầm Sen (Đầm Sen Water Park).</li>
            </ul>
            <Button type="primary">Xem chi tiết</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Section01;
