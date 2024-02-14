import React, { useContext } from 'react';
import './chat-screen.styles.scss';
import MessageInputContainer from '../../components/message-input-container/message-input-container';

import Message from '../../components/message/message';
import { AppContext } from '../../context/appContext';

function ChatScreen() {
    const { messages, inRoom } = useContext(AppContext);

    return (
        <div className={`chat-screen-container w-[60vw] max-[1024px]:w-[70vw] max-[768px]:w-[80vw] max-[426px]:w-screen max-[768px]:h-[85vh] max-[426px]:h-[100vh] h-[80vh] p-8 max-[426px]:px-4 max-[426px]:py-4 border-2 border-black border-solid rounded-3xl max-[426px]:rounded-none absolute top-[calc(-80vh-2px)] max-[768px]:top-[calc(-85vh-2px)] max-[426px]:top-[calc(-100vh-2px)] flex flex-col items-center${inRoom ? ' active' : ''}`}>
            <div className="message-list w-full h-4/5 max-[1440px]:h-[85%] max-[768px]:h-[87.5%] max-[426px]:h-[90%] overflow-y-scroll flex flex-col-reverse gap-[1.25rem]">
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
