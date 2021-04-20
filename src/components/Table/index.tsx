import React, { useEffect, useState } from 'react';
import Square from '../Square'
import { Container } from './styles';
import { socket } from '../../services/socket';

interface PieceProps {
    player: 1 | 2,
    type: string
}

interface MoveData {
    dest: number;
    source: number;
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

        socket.on('played', (gameData: GameData) => {
            console.log(gameData)
            setTable(gameData)
        })
    }, [])

    function handleClick(dest: number, square: PieceProps) {
        if (!square.type && source === -1) {
            console.log('escolha peças validas para jogar')
            return;
        } else if (square.type && source === -1) {
            setSource(dest)
            console.log('escolha um destino')
            return;
        }
        if (source > 0) {
            const move: MoveData = { dest, source }
            socket.emit('move', move)
            console.log(source, dest)
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