import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'
import { Container, Input, Button } from './styles';
import { socket } from '../../services/socket'
import { useUsers } from '../../hooks/user'

interface roomStateData {
    state: User[]
}

interface User {
    socketId: string;
    name: string;
    room: string;
}

const LadingPage: React.FC = () => {
    const [inputName, setInputName] = useState('');
    const [inputRoom, setInputRoom] = useState('');
    const [stateRoom, setStateRoom] = useState('');
    const history = useHistory()
    const { setUsers } = useUsers()

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        //TODO validate
        if (inputName && inputRoom) {
            socket.emit('enterRoom', { userName: inputName, room: inputRoom })
            socket.on('roomState', (({ state }: roomStateData) => {
                if (state.length > 2) {
                    setStateRoom('Essa sala já está cheia')
                }
                else if (state.length === 1) {
                    setStateRoom('Aguardando outro jogador entrar na sala')
                }
                else {
                    setUsers(state)
                    history.push('/room')
                }
            }))

            socket.on('ready', (usersInRoom: User[]) => {
                setUsers(usersInRoom)
                history.push('/room')
            })
        }
    }

    return (

        <Container>
            <div>
                <form onSubmit={handleSubmit}>
                    <Input value={inputName} onChange={(e) => setInputName(e.target.value)} type='text' name='userName' placeholder='Digite seu nome'></Input>
                    <Input value={inputRoom} onChange={(e) => setInputRoom(e.target.value)} type='text' name='room' placeholder='Digite o nome da sala'></Input>
                    <Button disabled={(stateRoom.split(' ')[0] === 'Aguardando' && true)} type='submit'>Entrar</Button>
                </form>
                <strong>{stateRoom}</strong>
            </div>
        </Container>
    );
}

export default LadingPage;