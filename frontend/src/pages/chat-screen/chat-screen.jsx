import React, { useContext, useEffect } from 'react';
import './chat-screen.styles.scss';
import MessageInputContainer from '../../components/message-input-container/message-input-container';

import Message from '../../components/message/message';
import { AppContext } from '../../context/appContext';

function ChatScreen() {
    const { messages, setMessages, socket } = useContext(AppContext);

    useEffect(() => {
        // console.log(messages);
        socket.on('receive_message', (response) => {
            setMessages([...messages, response]);
        });
    }, [socket]);

    return (
        <div className='chat-screen-container'>
            <div className="message-list">
                {messages.sort((a, b) => b.timestamp - a.timestamp).map(msg => {
                    return (
                        <Message 
                            key={msg.timestamp} 
                            message={msg.message} 
                        />
                    )
                })}
            </div>

            <MessageInputContainer />
        </div>
    )
}

export default ChatScreen;
