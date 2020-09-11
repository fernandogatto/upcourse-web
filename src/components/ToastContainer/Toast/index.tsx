import React, { useEffect } from 'react';
import { MdInfo, MdCheckCircle, MdError, MdHighlightOff } from 'react-icons/md';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProps {
    message: ToastMessage;
    style: object;
}

const icons = {
    info: <MdInfo size={24} />,
    success: <MdCheckCircle size={24} />,
    error: <MdError size={24} />,
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 4000);

        return () => {
            clearTimeout(timer);
        };
    }, [removeToast, message.id]);

    return (
        <Container
            type={message.type}
            style={style}
        >
        {icons[message.type || 'info']}

        <div>
            <strong>{message.title}</strong>
            { message.description && <p>{message.description}</p> }
        </div>

        <button onClick={() => removeToast(message.id)} type="button">
            <MdHighlightOff size={18} />
        </button>
        </Container>
    );
}

export default Toast;
