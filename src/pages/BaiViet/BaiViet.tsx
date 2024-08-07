import styled from 'styled-components';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import CustomTag from '../../CustomTag/CustomTag';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1920px;
    height: 2092px;
    gap: 48px;
`
const MainDiv = styled.div`
    width: 1920px;
    height: 2092px;
`

export const BaiViet = ()=>{
    return(
        <Container>
            <HeaderComponent/>
            <CustomTag name="Bài viết"/> 
            <MainDiv>
                
            </MainDiv>
            <FooterComponent/>
        </Container>
    )
}