import React, { useState, FormEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Container, Title, Input, Button } from './styles';
import { socket } from '../../services/socket'
import { useUsers } from '../../hooks/user'
import { useToast } from '../../hooks/toast'

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
    const [waiting, setWaiting] = useState(false);
    const history = useHistory()
    const { setUsers } = useUsers()
    const { addToast } = useToast()

    useEffect(() => {
        socket.on('roomState', (({ state }: roomStateData) => {
            console.log(state);
            if (!state.length) {
                addToast({ title: 'Sala Cheia', content: 'Por favor, escolha outra sala.' })
            }
            else if (state.length === 1) {
                addToast({ title: 'Aguardando...', content: 'Por favor, espere outro jogador entrar na sala.' })
                setWaiting(true)
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
    }, [addToast, setUsers, history])

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (!inputName && !inputRoom) {
            addToast({ title: 'MissingParams', content: 'Preencha os campos nome e sala.' })
        }
        else if (!inputName) {
            addToast({ title: 'MissingParams', content: 'Preencha o campo nome.' })
        }
        else if (!inputRoom) {
            addToast({ title: 'MissingParams', content: 'Preencha o campo sala.' })
        }
        if (inputName && inputRoom) {
            socket.emit('enterRoom', { userName: inputName, room: inputRoom })
            console.log(inputName, inputRoom)
        }
    }

    return (

        <Container>

            <div>
                <Title>xadrez.com</Title>
                <form onSubmit={handleSubmit}>
                    <Input value={inputName} onChange={(e) => setInputName(e.target.value)} type='text' name='userName' placeholder='Digite seu nome'></Input>
                    <Input value={inputRoom} onChange={(e) => setInputRoom(e.target.value)} type='text' name='room' placeholder='Digite o nome da sala'></Input>
                    <Button disabled={waiting} type='submit'>Entrar</Button>
                </form>
            </div>
        </Container>
    );
}

export default LadingPage;