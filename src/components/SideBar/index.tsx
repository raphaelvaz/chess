import React from 'react';
import {
    BsClockFill, BsPlusSquareFill, FaChessBoard, BsPeopleFill,
    BsFlagFill, FaEquals, BiArrowToRight, BiArrowToLeft,
    MdKeyboardArrowLeft, MdKeyboardArrowRight, BsPlayFill,
    ImLoop, BsGearFill
} from '../../styles/icons'

import { Container, Tabs, Tab, Plays, TaskBar } from './styles';

const SideBar: React.FC = () => {
    return (
        <Container>
            <Tabs >
                <Tab ><BsClockFill size={25} /><span>PARTIDA</span></Tab>
                <Tab ><BsPlusSquareFill size={25} />NOVA PARTIDA</Tab>
                <Tab ><FaChessBoard size={25} /> PARTIDAS</Tab>
                <Tab ><BsPeopleFill size={25} /> JOGADORES</Tab>
            </Tabs>
            <Plays />
            <TaskBar >
                <div>
                    <FaEquals size={25} />
                    <strong>Empate</strong>
                </div>

                <div>
                    <BsFlagFill size={25} />
                    <strong>Desistir</strong>
                </div>
                <BiArrowToLeft size={24} />
                <MdKeyboardArrowLeft size={25} />
                <MdKeyboardArrowRight size={25} />
                <BiArrowToRight size={24} />
                <BsPlayFill size={24} />
                <ImLoop size={20} />
                <BsGearFill size={20} />

            </TaskBar>
        </Container >
    );
}

export default SideBar;