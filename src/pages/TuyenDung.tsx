import React from 'react';
import styled from 'styled-components';
import VideoComponent from '../components/VideoComponent';
import CustomTag from '../components/CustomTag';
import JobCard from '../components/JobCard';
import SearchSidebar from '../components/SearchSidebar';

const Container = styled.div`
    position: relative;
    width: 1920px;
    height: 1686px;
`
const Frame01 = styled.div`
    position: absolute;
    display: flex;
    width: 1920px;
    height: 921px;
    padding-top: 220px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
`
const Frame02 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
`
const Frame03 = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`
const Frame04 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`
const Frame05 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`
const Frame06 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`
const Frame07 = styled.div`
    display: flex;
    width: 1134px;
    justify-content: space-between;
    align-items: flex-start;
`
const TuyenDung: React.FC = () => {
    return (
        <Container>
            <VideoComponent />
            <Frame01>
                <CustomTag name="Tuyển dụng" />
                <Frame02>
                    <Frame03>
                        <SearchSidebar ></SearchSidebar>
                        <Frame04>
                            <Frame05>
                                <Frame07>
                                    <JobCard />
                                    <JobCard />
                                    <JobCard />
                                </Frame07>
                                <Frame07>
                                    <JobCard></JobCard>
                                    <JobCard></JobCard>
                                    <JobCard></JobCard>
                                </Frame07>
                                <Frame07>
                                    <JobCard></JobCard>
                                    <JobCard></JobCard>
                                    <JobCard></JobCard>
                                </Frame07>
                            </Frame05>
                            <Frame06></Frame06>
                        </Frame04>
                    </Frame03>
                </Frame02>
            </Frame01>
        </Container>
    )
};

export default TuyenDung;