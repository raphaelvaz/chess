import React from 'react';
import { Container, Title, Content } from './styles';
import { BiInfoCircle } from '../../styles/icons'

interface ToastProps {
    title: string;
    content: string;
}

const Toast: React.FC<ToastProps> = ({ content, title }) => {
    return (
        <Container>
            <div>
                <BiInfoCircle size={25} />
                <Title>{title}</Title>
            </div>
            <Content>{content}</Content>
        </Container>);
}

export default Toast;