import { Card, Col, Row, Tag } from 'antd';
import styled from 'styled-components';

const { Meta } = Card;

const Container = styled.div`
    display: flex;
    width: 1520px;
    padding: 40px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
`
const CustomTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`
const Line = styled.div`
    width: 220px;
    height: 6px;
    border-radius: 100px;
    background: var(--blue-primary-600, #003F7D);
`
const Text01 = styled.p`
    color: var(--gray-gray-600, #4D4D4D);
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const Text02 = styled.p`
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
const Text03 = styled.p`
color: var(--gray-gray-600, #4D4D4D);
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const StyledCard = styled(Card)`
    align-items: center;
    width: 362px;
    height: 359px;
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
`;

type Service = {
    title: string,
    description: string,
    image: string
}

type ServicesProps = {
    services: Service[]
}
const Frame01C: React.FC<ServicesProps> = (props) => {
    return (
        <Container>
            <CustomTitle>
                <Text01>CHIA SẺ THÔNG TIN</Text01>
                <Text02>Bài viết mới</Text02>
                <Line />
                <Text03>
                    Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch
                </Text03>
            </CustomTitle>

            <Row gutter={[16, 16]} justify="center">
                {props.services.map((services, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                        <StyledCard
                            hoverable
                            cover={<img alt={services.title} src={services.image} />}
                        >
                            <Meta title={services.title} description={services.description} />
                        </StyledCard>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Frame01C;