import React, { createContext, useState } from "react";

import { io } from 'socket.io-client';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const socket = io.connect('http://localhost:5000/');

    const [messages, setMessages] = useState([]);

    const contextValue = {
        messages,
        setMessages,
        socket
    };

    return (
        <AppContext.Provider value={ contextValue }>
            { children }
        </AppContext.Provider>
    )
}
