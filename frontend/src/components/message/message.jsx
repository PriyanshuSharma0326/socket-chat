import React from 'react';
import './message.styles.scss';

function Message({ message }) {
    return (
        <div className='message-container'>
            {message}
        </div>
    );
}

export default Message;
