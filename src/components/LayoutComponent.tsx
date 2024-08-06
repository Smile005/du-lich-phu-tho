import styled from 'styled-components';
import HeaderComponent from './HeaderComponent'; 
import FooterComponent from './FooterComponent'; 

const Container = styled.div`

`

export const LayoutComponent = ()=>{
    return (
        <Container>
            <HeaderComponent />
                
            <FooterComponent />
        </Container>
    )
}