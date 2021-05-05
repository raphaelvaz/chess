import styled from 'styled-components';

interface ButtonProps {
    player: number
    index: number
}

export const Container = styled.button<ButtonProps>`
    display:flex;
    align-items: center;
    justify-content:center;

    min-width: 40px;
    min-height: 40px;

    width: min(8vw, min(10vh, 70px));
    height: min(8vw, min(10vh, 70px));
    
    border: none;

    background-color: ${props => ((
        props.index > 7 && props.index < 16)
        || (props.index > 23 && props.index < 32)
        || (props.index > 39 && props.index < 48)
        || (props.index > 55 && props.index < 64)
        ? !(props.index % 2) ? '#a0522d' : '#c9bd4e' : !(props.index % 2) ? '#c9bd4e' : '#a0522d')};

    svg{
        color:${props => props.player === 1 ? '#fff' : '#000'};
    }
`;
