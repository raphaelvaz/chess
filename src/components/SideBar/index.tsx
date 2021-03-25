import React from 'react';
import { Container, Plays, TaskBar } from './styles'
import Chat from '../Chat/index'



const SideBar: React.FC = () => {
    return (
        <Container>
            {/* <Tabs >
                <Tab ><BsClockFill size={25} /><span>Partida</span></Tab>
                <Tab ><BsPlusSquareFill size={25} />Nova partida</Tab>
                <Tab ><FaChessBoard size={25} /> Partidas</Tab>
                <Tab ><BsPeopleFill size={25} /> Jogadores</Tab>
            </Tabs>
            <Plays /> */}
            <Plays>
                Jogadas:
            </Plays>
            <TaskBar >
                <button><strong>Empate</strong></button>
                <button><strong>Desistir</strong></button>
            </TaskBar>
            <Chat />
        </Container >
    );
}

export default SideBar;