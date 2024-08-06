import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import TrangChu from './pages/TrangChu/TrangChu';
import { BaiViet } from './pages/BaiViet/BaiViet';
import Section02 from './pages/TrangChu/Section02';

const App = () => (
  <Layout className="layout">


    {/* <Section02 /> */}
    {/* <BaiViet /> */}

    <TrangChu />
    {/* <Card02 /> */}
    {/* <CustomTag name="BÀI VIẾT"/> */}
    {/* <CopyFilled /> */}
    {/* image: '/img/img.png', */}
  </Layout>
);

export default App;
