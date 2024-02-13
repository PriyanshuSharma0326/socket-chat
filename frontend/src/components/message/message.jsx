import React from 'react';

function Message({ message }) {
    return (
        <div className='text-[1.25rem] px-4 py-2 w-fit rounded-[0.5rem_0.5rem_0.5rem_0] bg-[var(--grey-6)]'>
            {message}
        </div>
    );
}

export default Message;
