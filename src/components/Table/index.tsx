import React from 'react';

import Square from '../Square'
import { Container } from './styles';

const Table: React.FC = () => {
    const grid = Array(8).fill(0).map(x => Array(8).fill(''));
    return (
        <Container>
            {grid.map((row, i) => {
                return (
                    row.map((positon, j) => {
                        return (<Square key={i + '-' + j} row={j} col={i}></Square>)
                    }))
            })}
        </Container>
    )
}

export default Table;