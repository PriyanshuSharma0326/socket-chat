import React, { useContext } from 'react';
import './button.styles.css';
import { AppContext } from '../../context/appContext';

function Button({ buttonText }) {
    const { socket, setInRoom, inRoom } = useContext(AppContext);

    const setRoom = () => {
        socket.emit('join_room', 'socket-room');
        setInRoom(true);
    }

    return (
        <button onClick={setRoom} className={`px-4 py-3 bg-black text-white border-[1px] border-solid border-black rounded-[0.25rem] text-[1.25rem] font-roboto-sans absolute bottom-1/2 hover:cursor-pointer hover:bg-white hover:text-black ${inRoom ? ' active' : ''}`}>
            {buttonText}
        </button>
    )
}

export default Button;
