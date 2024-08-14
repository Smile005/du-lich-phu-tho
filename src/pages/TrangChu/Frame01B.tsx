import React from 'react';
import { Button, Card, Col, Row, Tag } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
display: inline-flex;
flex-direction: column;
align-items: center;
width: 1520px;
height: 892px;
background: rgba(78, 149, 219, 0.70);
backdrop-filter: blur(7.5px);
`
const Frame01 = styled.div`
display: inline-flex;
flex-direction: column;
align-items: center;
gap: 16px;
`
const Text01a = styled.div`
color: var(--white, #FFF);
text-align: center;

/* Roboto/20px: Medium */
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
const Text01b = styled.div`
color: var(--blue-primary-600, #003F7D);
text-align: center;
leading-trim: both;
text-edge: cap;
font-family: Philosopher;
font-size: 44px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Rec = styled.div`
width: 130px;
height: 6px;
border-radius: 100px;
background: var(--blue-primary-600, #003F7D);
`
const Text01c = styled.div`
color: var(--gray-gray-50, #F0F0F0);

/* Roboto/20px: Regular */
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const Frame02 = styled.div`
display: inline-flex;
align-items: flex-start;
gap: 24px;
`
const StyledCard = styled(Card)`
    width: 362px;
    height: 542px;
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
`
const CustomButton = styled(Button)`
display: inline-flex;
height: 44px;
padding: 0px 28px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 6px;
background: var(--blue-primary-500, #0054A6);

color: #FFF;

/* Roboto/18px: Medium */
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
type Post = {
    title: string
    description: string
    image: string
    tags: string[]
    views: string
    date: string
}

type PostsProps = {
    posts: Post[]
}

const { Meta } = Card;

const Frame01B: React.FC<PostsProps> = (props) => {
    return (
        <Container>
            <Frame01>
                <Text01a>CHIA SẺ THÔNG TIN</Text01a>
                <Text01b>Bài viết mới</Text01b>
                <Rec />
                <Text01c>Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch</Text01c>
            </Frame01>
            <Frame02>
                <Row gutter={[16, 16]} justify="center">
                    {props.posts.map((post, index) => (
                        <Col xs={24} sm={12} md={8} key={index}>
                            <StyledCard
                                hoverable
                                cover={<img alt={post.title} src={post.image} />}
                            >
                                <Meta title={post.title} description={post.description} />
                                <div style={{ marginTop: '10px' }}>
                                    {post.tags.map(tag => (
                                        <Tag color="blue" key={tag}>{tag}</Tag>
                                    ))}
                                </div>
                                <div style={{ marginTop: '10px', color: '#666' }}>
                                    {post.views} • {post.date}
                                </div>
                            </StyledCard>
                        </Col>
                    ))}
                </Row>
            </Frame02>
            <CustomButton>Xem thêm bài viết</CustomButton>
        </Container>
    )
}

export default Frame01B;