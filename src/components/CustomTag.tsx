import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../assets/Tag.svg'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 378px;
height: 98px;
`
const Polygon = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 382px;
height: 98px;
flex-shrink: 0;

fill: rgba(255, 255, 255, 0.70);
stroke-width: 2px;
stroke: var(--white, #FFF);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
backdrop-filter: blur(2px);
`
const CustomText = styled.div`
position: absolute;
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
type CustomTagProps = {
    name: string
}

const CustomTag: React.FC<CustomTagProps> = ({ name }) => {
    return (
        <Container>
            <Polygon>
            <Icon style={{position: 'absolute', textAlign: 'center'}}/>
            <CustomText>{name}</CustomText>
            </Polygon>
        </Container>
    );
};

export default CustomTag;
