import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import TrangChu from './pages/TrangChu/TrangChu';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <HeaderComponent />
        <Layout>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              <Routes>
                <Route path="/" element={<TrangChu />} />
                <Route path="/posts" element={<h1>Bài Viết</h1>} />
                <Route path="/" element={<h1>Trang Chủ</h1>} />
                <Route path="/documents" element={<h1>Tài Liệu</h1>} />
                <Route path="/recruitment" element={<h1>Tuyển Dụng</h1>} />
              </Routes>
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
