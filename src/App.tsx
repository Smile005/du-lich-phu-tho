import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { addDoc, collection, getDocs } from 'firebase/firestore';
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

const App: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [image, setImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot1 = await getDocs(collection(db, "data"));
      const docs = querySnapshot1.docs.map(doc => doc.data());
      setData(docs);

      const querySnapshot2 = await getDocs(collection(db, "news"));
      const news = querySnapshot2.docs.map(doc => doc.data());
      setNews(news);

      // const querySnapshot = await getDocs(collection(db, "images"));
      // const imagesList = querySnapshot.docs.map(doc => doc.data());
      // setImages(imagesList);
    };

    fetchData();
  }, []);

 
  return (
    <Router>
      <Layout style={{ width: '1920px' }}>
        <HeaderComponent />
        <Content>
          <div style={{ background: '#fff', textAlign: 'center' }}>
            <Routes>
              <Route path="/" element={<TrangChu />} />
              <Route path="/posts" element={<BaiViet news={news}/>} />
              <Route path="/" element={<h1>Trang Chủ</h1>} />
              <Route path="/documents" element={<TaiLieu />} />
              <Route path="/recruitment" element={<TuyenDung />} />
              {/* <Route path="/chitiettuyendung" element={<ChiTietTuyenDung MoTa={MoTa}/>} /> */}
            </Routes>
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Router>
  );
};

export default App;
