import React from 'react';
import { Card, Row, Col } from 'antd';
import './SideImage.css';

const SideImage: React.FC = () => {
    return (
        <div className="image-component">
            <Row gutter={16}>
                <Col span={24}>
                    <Card className="image-card">
                        <img src="/img/img.png" alt="Image 1" />
                    </Card>
                </Col>
                <Col span={24}>
                    <Card className="image-card">
                        <img src="/img/img.png" alt="Image 2" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default SideImage;
