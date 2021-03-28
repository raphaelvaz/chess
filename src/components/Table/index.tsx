import React, { useEffect, useState } from 'react';
import Square from '../Square'
import { Container } from './styles';
import { socket } from '../../services/socket';

interface PieceProps {
    player: 1 | 2,
    type: string
}

type GameData = PieceProps[]

const Table: React.FC = () => {
    const [source, setSource] = useState(-1);
    const [table, setTable] = useState<GameData>([])

    useEffect(() => {
        socket.on('startGame', (gameData: GameData) => {
            setTable(gameData)
            console.log(gameData)
        })
    }, [])

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
            //setTable([...newTable])
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