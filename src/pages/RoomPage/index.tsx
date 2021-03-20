import React from 'react';
import { Container } from './styles';
import Main from '../../components/Main'
import SideBar from '../../components/SideBar'

const RoomPage: React.FC = () => {
    return (
        <Container>
            <Main />
            <SideBar />
        </Container>);
}

export default RoomPage;