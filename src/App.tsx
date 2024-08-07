import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import TrangChu from './pages/TrangChu/TrangChu';
import TuyenDung from './pages/TuyenDung';
import TaiLieu from './pages/TaiLieu/TaiLieu';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ width: '1920px' }}>
        <HeaderComponent />
        <Content>
          <div style={{ background: '#fff', textAlign: 'center' }}>
            <Routes>
              <Route path="/" element={<TrangChu />} />
              <Route path="/posts" element={<h1>Bài Viết</h1>} />
              <Route path="/" element={<h1>Trang Chủ</h1>} />
              <Route path="/documents" element={<TaiLieu />} />
              <Route path="/recruitment" element={<TuyenDung />} />
            </Routes>
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Router>
  );
};

export default App;
