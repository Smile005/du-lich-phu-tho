import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import TrangChu from './pages/TrangChu/TrangChu';
import TuyenDung from './pages/TuyenDung';
import TaiLieu from './pages/TaiLieu';
import BaiViet from './pages/BaiViet';
import ChiTietTuyenDung from './pages/ChiTietTuyenDung';

const { Content } = Layout;

const MoTa = 
  
{
  ViTri: "Nhân viên thiết kế đồ họa",
  ChucVu: "Nhân viên chính thức",
  NoiLamViec: "CVVH Đầm Sen",
  NgayDang: "2 tuần trước",
  TinhTrang: "Đang Tuyển"
}

const App: React.FC = () => {
  return (
      <Router>
        <Layout style={{ width: '1920px' }}>
          <HeaderComponent />
          <Content>
            <div style={{ background: '#fff', textAlign: 'center' }}>
              <Routes>
                <Route path="/" element={<TrangChu />} />
                <Route path="/posts" element={<BaiViet />} />
                <Route path="/" element={<h1>Trang Chủ</h1>} />
                <Route path="/documents" element={<TaiLieu />} />
                <Route path="/recruitment" element={<TuyenDung />} />
                <Route path="/chitiettuyendung" element={<ChiTietTuyenDung MoTa={MoTa}/>} />
              </Routes>
            </div>
          </Content>
          <FooterComponent/>
        </Layout>
      </Router>
  );
};

export default App;
