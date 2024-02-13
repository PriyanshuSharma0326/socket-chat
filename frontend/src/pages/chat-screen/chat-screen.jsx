import React, { useContext } from 'react';
import './chat-screen.styles.css';
import MessageInputContainer from '../../components/message-input-container/message-input-container';

import Message from '../../components/message/message';
import { AppContext } from '../../context/appContext';

function ChatScreen() {
    const { messages, inRoom } = useContext(AppContext);

    return (
        <div className={`chat-screen-container w-[60vw] h-[80vh] p-8 border-2 border-black border-solid rounded-3xl absolute top-[calc(-80vh-2px)] flex flex-col items-center${inRoom ? ' active' : ''}`}>
            <div className="message-list w-full h-4/5 overflow-y-scroll flex flex-col-reverse gap-[1.25rem]">
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
