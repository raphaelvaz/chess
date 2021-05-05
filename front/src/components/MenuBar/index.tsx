import React from 'react'
import { Container, Titulo, Main, Footer } from './styles'
import {
    FaChessBoard, FaChess, BsPlayFill, MdWarning, MdSchool, BsNewspaper, BsChatDotsFill, BsThreeDots, RiVipDiamondFill
    , HiSun, BiArrowToLeft, BsGearFill, FaSearch, FaQuestionCircle
} from '../../styles/icons'

const MenuBar: React.FC = () => {
    return (
        <Container>
            <div>
                <Titulo>
                    <a href="/"><FaChessBoard size={23} /><strong>CHESS</strong></a>
                </Titulo>
                <Main>
                    <a href="/"><FaChess size={18} /><span>Início</span></a>
                    <a href="/"><BsPlayFill size={20} /><span>Jogar</span></a>
                    <a href="/"><MdWarning size={18} /><span>Problemas</span></a>
                    <a href="/"><MdSchool size={18} /><span>Aprender</span></a>
                    <a href="/"><BsNewspaper size={18} /><span>Hoje</span></a>
                    <a href="/"><BsChatDotsFill size={18} /><span>Conectar</span></a>
                    <a href="/"><BsThreeDots size={18} /><span>Mais</span></a>
                    <a href="/"><RiVipDiamondFill size={18} /><span>Avaliação gratuita</span></a>
                </Main>
            </div>
            <Footer>
                <a href="/"><HiSun size={18} /><span>Interface clara</span></a>
                <a href="/"><BiArrowToLeft size={18} /><span>Colapsar</span></a>
                <a href="/"><BsGearFill size={18} /><span>Definições</span></a>
                <a href="/"><FaSearch size={18} /><span>Pesquisa</span></a>
                <a href="/"><FaQuestionCircle size={18} /><span>Ajuda</span></a>
            </Footer>
        </Container>
    )
}

export default MenuBar;