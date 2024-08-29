import React, { useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Provider, useDispatch } from 'react-redux';
import 'antd/dist/reset.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import TrangChu from './pages/TrangChu/TrangChu';
import TuyenDung from './pages/TuyenDung';
import TaiLieu from './pages/TaiLieu';
import BaiViet from './pages/BaiViet/BaiViet';
import ChiTietTuyenDung from './pages/ChiTietTuyenDung/ChiTietTuyenDung';
import ChiTietBaiViet from './pages/ChiTietBaiViet';
import { store } from './redux/store';
import { setNews } from './redux/slices/newsSlice';
import { setData } from './redux/slices/dataSlice';
import { tuyendung } from './type/tuyendung';
import { setTuyendungData } from './redux/slices/tuyendungSlice';
import { News } from './type/news';

const { Content } = Layout;

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // const docs = querySnapshot1.docs.map(doc => doc.data());
      // dispatch(setData(docs));

      const querySnapshot1 = await getDocs(collection(db, "data"));
      const data = querySnapshot1.docs.map(doc => ({
        id: doc.id,  // Gán id từ DocumentSnapshot vào object dữ liệu
        ...doc.data() // Lấy tất cả các field khác từ document
      })) as tuyendung[];
      console.log(data)
      dispatch(setTuyendungData(data));

      const querySnapshot2 = await getDocs(collection(db, "news"));
      const news = querySnapshot2.docs.map(doc => ({
        id: doc.id, // Thêm ID của tài liệu vào đối tượng
        ...doc.data() // Thêm dữ liệu tài liệu
      })) as News[];
  
      dispatch(setNews(news));
    };

    fetchData();
  }, [dispatch]);

  return (
    <Router>
      <Layout style={{ width: '1920px' }}>
        <HeaderComponent />
        <Content>
          <div style={{ background: '#fff', textAlign: 'center' }}>
            <Routes>
              {/* Định nghĩa các tuyến cụ thể trước */}
              <Route path="/chitiettuyendung/:index" element={<ChiTietTuyenDung />} />
              <Route path="/chitietbaiviet/:index" element={<ChiTietBaiViet />} />

              {/* Các tuyến chung hơn */}
              <Route path="/posts" element={<BaiViet />} />
              <Route path="/documents" element={<TaiLieu />} />
              <Route path="/recruitment" element={<TuyenDung />} />

              {/* Đặt tuyến chung nhất cuối cùng */}
              <Route path="/" element={<TrangChu />} />
              {/* Hoặc có thể chỉ định một tuyến mặc định nếu cần */}
            </Routes>
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Router>
  );
};

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReduxApp;
