import React from 'react';
import './home-page.styles.scss';
import Button from '../../components/button/button';
import ChatScreen from '../chat-screen/chat-screen';

function HomePage() {
    return (
        <div className='home-page-container'>
            <ChatScreen />

            <Button 
                buttonText='Start Chatting'
            />
        </div>
    )
}

export default HomePage;
