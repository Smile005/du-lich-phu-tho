import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import 'antd/dist/reset.css';
import TrangChu from './pages/TrangChu/TrangChu'
import {Title} from '../src/components/Title/Title';

const App = () => {
  return (
    <Layout className="layout">
      <TrangChu/>
      {/* <Title name="Tai Lieu"/> */}
    </Layout>
  );
};

export default App;
