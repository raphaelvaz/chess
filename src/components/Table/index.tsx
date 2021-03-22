import React, { useState } from 'react';
import Square from '../Square'
import { Container } from './styles';
import initChess from '../helpers/initChess'

interface PieceProps {
    player: number,
    type: string,
}

const Table: React.FC = () => {
    const [source, setSource] = useState(-1);
    const [table, setTable] = useState(initChess())

    function handleClick(dest: number, square: PieceProps) {
        if (!square.type && source === -1) {
            console.log('escolha peças validas para jogar')
            return;
        } else if (square.type) {
            setSource(dest)
            console.log('escolha um destino')
            return;
        }
        if (source > 0) {
            //selected send...
            //backend
            console.log('peça movida!')
            console.log(source, source)
            const newTable = table.map((content, index) => {
                if (source === index) {
                    return {}
                }
                if (dest === index) {
                    return {
                        player: 1,
                        type: 'pawn',
                    }
                }
                return content
            })
            console.log(newTable)
            setTable([...newTable])
            setSource(-1)
        }
    }


    return (
        <Container>
            {table.map(((square: PieceProps, index: number) => {
                return <Square index={index} key={index} content={square} onClick={() => handleClick(index, square)} />
            }))}
        </Container>
    )
}

export default Table;