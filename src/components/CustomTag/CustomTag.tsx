import React from 'react';
import styled from 'styled-components';

type CustomTagProps = {
    name: string
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1920px;
    gap: 48px;
`
const Border = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 378px;
    height: 98px;
`
const Polygon = styled.div`
    width: 378px;
    height: 98px;
    background: rgba(255, 255, 255, 0.8); 
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
`
const CustomText = styled.p`
    color: var(--blue-primary-500, #0054A6);
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: Philosopher;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px; /* 200% */
    text-transform: uppercase;
`

const CustomTag: React.FC<CustomTagProps> = ({ name }) => {
    return (
        <Container>
            <Border>
                <Polygon>
                    <CustomText>{name}</CustomText>
                </Polygon>
            </Border>
        </Container>
    );
};

export default CustomTag;
