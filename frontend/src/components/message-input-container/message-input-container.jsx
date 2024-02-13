import React, { useContext, useState } from 'react';
import './message-input-container.styles.scss';
import SendIcon from '@mui/icons-material/Send';

import { AppContext } from '../../context/appContext';

function MessageInputContainer() {
    const { socket } = useContext(AppContext);

    const [inputValue, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSendMessage = () => {
        if(inputValue.length) {
            socket.emit('send_message', {
                message: inputValue,
                timestamp: Date.now(),
                // senderID: socket.id
            });
            setInput('');
        }
    }

    const handleKeyDown = (e) => {
        if(inputValue.length) {
            if(e.key === 'Enter') {
                socket.emit('send_message', {
                    message: inputValue,
                    timestamp: Date.now()
                });
                setInput('');
            }
        }
    }

    return (
        <div className='message-input-container'>
            <input 
                type="text" 
                placeholder='Enter message' 
                onChange={handleChange} 
                value={inputValue} 
                onKeyDown={handleKeyDown}
            />

            <button className='send-button' onClick={handleSendMessage}>
                <SendIcon />
            </button>
        </div>
    )
}

export default MessageInputContainer;
