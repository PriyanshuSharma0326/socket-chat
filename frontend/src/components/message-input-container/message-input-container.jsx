import React, { useEffect, useState } from 'react';
import './message-input-container.styles.scss';
import SendIcon from '@mui/icons-material/Send';

import io from 'socket.io-client';

function MessageInputContainer() {
    const socket = io.connect('http://localhost:5000/');

    const [inputValue, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    useEffect(() => {
        // try {
            socket.on('receive_message', (response) => {
                console.log(response.message);
            });
        // }
        // catch(err) {
        //     socket.emit('error_receiving_message', {
        //         message: err,
        //         status: 400
        //     });
        // }
    }, [socket]);

    const handleSendMessage = () => {
        if(inputValue.length) {
            // try {
                socket.emit('send_message', {
                    message: inputValue,
                    status: 200
                });
            // }
            // catch(err) {
            //     socket.emit('error_sending_message', {
            //         message: err,
            //         status: 400
            //     });
            // }
        }
    }

    return (
        <div className='message-input-container'>
            <input 
                type="text" 
                placeholder='Enter message' 
                onChange={handleChange} 
                value={inputValue}
            />

            <button className='send-button' onClick={handleSendMessage}>
                <SendIcon />
            </button>
        </div>
    )
}

export default MessageInputContainer;
