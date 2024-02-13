import React, { useContext, useState } from 'react';
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
                room: 'socket-room',
            });
            setInput('');
        }
    }

    const handleKeyDown = (e) => {
        if(inputValue.length) {
            if(e.key === 'Enter') {
                socket.emit('send_message', {
                    message: inputValue,
                    timestamp: Date.now(),
                    room: 'socket-room',
                });
                setInput('');
            }
        }
    }

    return (
        <div className='w-[calc(100%-4rem)] absolute bottom-3 left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center gap-4'>
            <input 
                type="text" 
                className='w-full rounded-[2rem] bg-[var(--grey-7)] text-[1.05rem] border-2 border-solid border-black p-[0.9rem_1rem_0.9rem_1.25rem]'
                placeholder='Enter message' 
                onChange={handleChange} 
                value={inputValue} 
                onKeyDown={handleKeyDown}
            />

            <button className='rounded-full p-3 leading-0 border-none outline-none flex items-center justify-center bg-[var(--green-1)] hover:cursor-pointer hover:bg-[var(--green-2)]' onClick={handleSendMessage}>
                <SendIcon 
                    className='text-white'
                />
            </button>
        </div>
    )
}

export default MessageInputContainer;
