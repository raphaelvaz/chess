import styled from 'styled-components';

interface ContainerProps {
    row: number;
    col: number;
}

export const Container = styled.button<ContainerProps>`
    display:flex;
    min-width: 40px;
    min-height: 40px;

    width: min(8vw, min(10vh, 70px));
    height: min(8vw, min(10vh, 70px));

background-color: ${props => props.row % 2 ? props.col % 2 ? '#64a864' : '#fff' : props.col % 2 ? '#fff' : '#64a864'};

border:none;
`;
