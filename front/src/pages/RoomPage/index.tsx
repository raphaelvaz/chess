import React from 'react';
import { Container, ContentPage } from './styles';
import Main from '../../components/Main'
import SideBar from '../../components/SideBar'

const RoomPage: React.FC = () => {
    return (
        <Container>
            <ContentPage>
                <Main />
                <SideBar />
            </ContentPage>
        </Container>);
}

export default RoomPage;