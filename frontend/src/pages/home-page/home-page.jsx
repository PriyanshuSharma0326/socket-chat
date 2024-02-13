import React from 'react';
import Button from '../../components/button/button';
import ChatScreen from '../chat-screen/chat-screen';

function HomePage() {
    return (
        <div className='w-screen h-screen absolute flex flex-col items-center justify-center gap-12'>
            <ChatScreen />

            <Button 
                buttonText='Start Chatting'
            />
        </div>
    )
}

export default HomePage;
