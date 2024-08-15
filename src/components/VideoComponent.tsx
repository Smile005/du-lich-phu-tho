import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  width: 1920px;
  height: 1080px;
  flex-shrink: 0;
`
const VideoComponent: React.FC = () => {
  return (
    <Background>
      <video width="100%" autoPlay loop muted>
        <source src="./Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Background>
  );
};

export default VideoComponent;
