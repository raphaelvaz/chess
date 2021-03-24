import React, { FormEvent, useEffect, useState } from 'react';
import { Container, MessageBox, Form } from './styles';
import { socket } from '../../services/socket'
import { useUsers } from '../../hooks/user';

interface Message {
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

    const handleMessage = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const userName = users.find((user: UserData) => user.socketId === socket.id)?.name
        const message: Message = {
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
                    {messages.map((message) => (<li>{message.author + ': ' + message.content}</li>))}
                </ul>
            </MessageBox>
            <Form onSubmit={handleMessage}>
                <input value={input} onChange={(e) => setInput(e.target.value)} type='text' name='message' placeholder='Digite sua mensagem'></input>
                <button type='submit'>Enviar</button>
            </Form>
        </Container>);
}

export default Chat;