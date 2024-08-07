import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const VideoComponent: React.FC = () => {
  return (
    <Card title="My Video" style={{ width: 700, margin: 'auto' }}>
      <video width="100%" controls>
        <source src="./Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Card>
  );
};

export default VideoComponent;
