import React from 'react';
import { Card, List, Typography } from 'antd';
import styled from 'styled-components';
import { News } from '../type/news';

const { Title, Text } = Typography;

const Container = styled.div`
width: 362px;
height: 603px;
flex-shrink: 0;
border-radius: 8px;
background: rgba(255, 255, 255, 0.70);
/* shadow bai moi */
box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
backdrop-filter: blur(7.5px);
`
const Title01 = styled.div`
display: flex;
width: 319px;
height: 56px;
padding: 16px 24px;
justify-content: center;
align-items: center;
flex-shrink: 0;
color: var(--blue-primary-500, #0054A6);

/* Roboto/24px: Bold */
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Frame02 = styled.div`
display: inline-flex;
height: 535px;
flex-direction: column;
align-items: flex-start;
gap: 16px;
flex-shrink: 0;
`
const StyledCard = styled(Card)`
display: flex;
width: 314px;
height: 102px;
padding-right: 12px;
align-items: center;
gap: 12px;
flex-shrink: 0;
border-radius: 4px;
background: #FFF;
box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.10);

  .ant-card-body {
    padding: 16px;
    display: flex;
    align-items: center;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 16px;
  }

  .content {
    flex: 1;
  }

  .ant-typography {
    margin: 0;
  }

  .views-date {
    font-size: 12px;
    color: gray;
  }
`;

type NewsProps = {
    news: News[]
}
const Sidebar: React.FC<NewsProps> = ({news}) => {
    return (
        <Container >
            <Title01>Bài mới nhất</Title01>
            <Frame02>
                <List
                    dataSource={news.slice(0, 5)}
                    renderItem={item => (
                        <StyledCard>
                            <img src={item.image} alt={item.title} />
                            <div className="content">
                                <Title level={5}>{item.title}</Title>
                                <div className="views-date">
                                    <Text>{item.views} • {item.date}</Text>
                                </div>
                            </div>
                        </StyledCard>
                    )}
                />
            </Frame02>
        </Container>
    );
};

export default Sidebar;
