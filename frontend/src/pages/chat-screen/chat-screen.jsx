import React from 'react';
import './chat-screen.styles.scss';
import MessageInputContainer from '../../components/message-input-container/message-input-container';

function ChatScreen() {
    return (
        <div className='chat-screen-container'>
            <MessageInputContainer />
        </div>
    )
}

export default ChatScreen;
