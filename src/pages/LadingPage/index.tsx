import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'
import { Container } from './styles';
import { socket } from '../../services/socket'

const LadingPage: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [room, setRoom] = useState('');
    const history = useHistory()

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        //TODO validate
        socket.emit('enterRoom', { userName, room })
        if (userName && room) {
            history.push('/room')
        }
    }


    return (

        <Container>
            <form onSubmit={handleSubmit}>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type='text' name='userName' placeholder='Digite seu nome'></input>
                <input value={room} onChange={(e) => setRoom(e.target.value)} type='text' name='room' placeholder='Digite o nome da sala'></input>
                <button type='submit'>Entrar</button>
            </form>
        </Container>
    );
}

export default LadingPage;