import React, { FormEvent, useEffect, useState } from 'react';
import { Container, MessageBox, Form } from './styles';
import { socket } from '../../services/socket'
import { useUsers } from '../../hooks/user';
import { uuid } from 'uuidv4'
import { useHistory } from 'react-router';

interface Message {
    id: string
    author: string;
    content: string;
}

interface UserData {
    socketId: string;
    name: string;
    room: string

}


const Chat: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const { users } = useUsers()
    const history = useHistory()

    useEffect(() => {
        socket.on("receivedMessage", (message: Message) => {
            setMessages([...messages, message])
        })

        socket.on("previousMessages", (messages: Message[]) => {
            setMessages(messages)
        })
        socket.on("notification", (connectedMessage: Message) => {
            setMessages([...messages, connectedMessage])
        })
    }, [messages])

    useEffect(() => {
        socket.on('quit', () => {
            history.push("/")
        })

        return () => {
            socket.emit('playerLeft', socket.id)
        }
    }, [history])

    const handleMessage = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const userName = users.find((user: UserData) => user.socketId === socket.id)?.name
        const message: Message = {
            id: uuid(),
            author: userName || '',
            content: input,
        }
        if (input) {
            socket.emit('sendMessage', { content: input })
            setMessages([...messages, message])
            setInput('')
        }
    }

    return (
        <Container>
            <MessageBox>
                <ul>
                    {messages.map((message) => (<li key={message.id}>{message.author + ': ' + message.content}</li>))}
                </ul>
            </MessageBox>
            <Form onSubmit={handleMessage}>
                <input value={input} onChange={(e) => setInput(e.target.value)} type='text' name='message' placeholder='Digite sua mensagem'></input>
                <button type='submit'>Enviar</button>
            </Form>
        </Container>);
}

export default Chat;