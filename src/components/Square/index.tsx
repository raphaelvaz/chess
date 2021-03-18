import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    row: number;
    col: number;
};

const Square: React.FC<ButtonProps> = ({ row, col }) => {
    return (
        <Container row={row} col={col}>
        </Container>
    );
}

export default Square;