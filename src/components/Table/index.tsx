import React, { useEffect, useState } from 'react';
import Square from '../Square'
import { Container } from './styles';
import { socket } from '../../services/socket';
import { useUsers } from '../../hooks/user';

interface PieceProps {
    player: 1 | 2,
    type: string
}

interface MoveData {
    dest: number;
    source: number;
    user: Object;
}

type GameData = PieceProps[]

const Table: React.FC = () => {
    const [source, setSource] = useState(-1);
    const [table, setTable] = useState<GameData>([]);
    const [shift, setShift] = useState(0);
    const { users } = useUsers();

    useEffect(() => {
        socket.on('startGame', (gameData: GameData) => {
            setTable(gameData)
            console.log(users[0])
        })

        socket.on('played', (gameData: GameData) => {
            console.log(gameData)
            setTable(gameData)
            if (shift === 0) {
                setShift(1)
            } else {
                setShift(0)
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleClick(dest: number, square: PieceProps) {
        if (!square.type && source === -1 && (square.player - 1) !== shift) {
            console.log('escolha peças validas para jogar')
            return;
        } else if (square.type && source === -1) {
            setSource(dest)
            console.log('escolha um destino')
            return;
        }
        if (source > 0 && (shift !== square.player)) {

            const move: MoveData = { dest, source, user: users[shift] }
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