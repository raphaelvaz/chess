import React, { useEffect } from 'react';
import { Container, Title, Content } from './styles';
import { BiInfoCircle } from '../../styles/icons'
import { ToastMessage, useToast } from '../../hooks/toast'

interface ToastProps {
    message: ToastMessage
}

const Toast: React.FC<ToastProps> = ({ message }) => {
    const { removeToast } = useToast()

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast()
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    }, [removeToast])

    return (
        <Container>
            <div>
                <BiInfoCircle size={25} />
                <Title>{message.title}</Title>
            </div>
            <Content>{message.content}</Content>
        </Container>);
}

export default Toast;