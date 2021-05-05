import React, { createContext, useState, useContext } from 'react'
import Toast from '../components/Toast';

export interface ToastMessage {
    title: string;
    content: string;
}

interface ToastContextData {
    addToast(message: ToastMessage): void
    removeToast(): void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({ children }) => {
    const [message, setMessage] = useState<ToastMessage>({} as ToastMessage);

    function addToast(toast: ToastMessage): void {
        setMessage(toast)
    }

    function removeToast(): void {
        setMessage({} as ToastMessage)
    }

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            {message.title && <Toast message={message} />}
        </ToastContext.Provider>
    )
}

function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }

    return context;
}

export { ToastProvider, useToast }