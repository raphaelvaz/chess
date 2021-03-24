import React, { FormEvent, useEffect, useState } from 'react';
import { Container, MessageBox, Form } from './styles';

import { socket } from '../../services/socket'

interface Message {
    author: string;
    content: string;
}


const Chat: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);

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

        const message: Message = {
            author: socket.id,
            content: input,
        }
        if (input) {
            socket.emit('sendMessage', message)
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