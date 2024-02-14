import React, { createContext, useEffect, useState } from "react";

import { io } from 'socket.io-client';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const socket = io.connect('http://localhost:5000/');

    const [messages, setMessages] = useState([]);
    const [inRoom, setInRoom] = useState(false);

    useEffect(() => {
        socket.on('receive_message', (response) => {
            setMessages(prevMessages => [...prevMessages, response]);
        });
    }, [socket]);

    const contextValue = {
        messages,
        setMessages,
        socket,
        inRoom,
        setInRoom,
    };

    return (
        <AppContext.Provider value={ contextValue }>
            { children }
        </AppContext.Provider>
    )
}
